import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstadoBr } from 'src/app/models/estado-br';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { DropdownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  estados: EstadoBr[] = [];
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsLetterOp: any = [];

  constructor(private _formBuilder: FormBuilder,
              private _httpClient: HttpClient,
              private _dropdownService: DropdownService,
              private _consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
    this.estados = this._dropdownService.getEstadosBr();
    this.cargos = this._dropdownService.getCargos();
    this.tecnologias = this._dropdownService.getTecnologias();
    this.newsLetterOp = this.getNewsLetter();
    /*this.formulario = new FormGroup({
      nome: new FormGroup(null),
      email: new FormGroup(null)
    });*/

    
    this.formulario = this._formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      endereco: this._formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')]
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      this._httpClient.post('enderecaoServer/formUsuario', this.formulario.getRawValue()).subscribe((dados: any) => {
        this.reset();
      },
      (error: any) => alert('erro'));
    } else {
      this.formulario.markAllAsTouched();
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((campo: any) => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  reset(): void {
    this.formulario.reset();
  }

  aplicaCssErro(campo: any): any {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
     }
  }

  verificaValidTouched(campo: any): any {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  verificaEmailInvalido(): any {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }


  consultaCEP(): void {
    let cep = this.formulario.get('endereco.cep')?.value;
    if (cep != null && cep !== '') {
      this._consultaCepService.consultaCEP(cep)
      .subscribe((dados: any) => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados: any): void {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  setarCargo(): void {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias(): void {
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php']);
  }

  getNewsLetter(): any {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }
}
