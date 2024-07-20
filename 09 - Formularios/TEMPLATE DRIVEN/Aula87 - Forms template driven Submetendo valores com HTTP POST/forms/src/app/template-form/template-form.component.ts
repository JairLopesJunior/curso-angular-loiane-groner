import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'jair',
    email: 'jair@gmail.com'
  }

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  aplicaCssErro(campo: any): any {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
     }
  }

  verificaValidTouched(campo: any): boolean {
    return !campo.valid && campo.touched;
  }

  onSubmit(form: any): void {
    console.log(form);

    this._http.post('enderecaoServer/formUsuario', form.value).subscribe();
  }

  consultaCEP(cep: string, form: any): void {
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this._http.get(`//viacep.com.br/ws/${cep}/json`)
        .subscribe((dados: any) => {
          this.populaDadosForm(dados, form);
        });
      }
    }
  }

  populaDadosForm(dados: any, form: any): void {
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
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
    
    /*form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/
  }
}
