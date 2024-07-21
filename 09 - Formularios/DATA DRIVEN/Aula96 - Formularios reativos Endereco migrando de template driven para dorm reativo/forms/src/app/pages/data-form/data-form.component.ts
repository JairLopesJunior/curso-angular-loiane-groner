import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
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
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this._httpClient.post('enderecaoServer/formUsuario', this.formulario.getRawValue()).subscribe((dados: any) => {
      this.reset();
    },
    (error: any) => alert('erro'));
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
}
