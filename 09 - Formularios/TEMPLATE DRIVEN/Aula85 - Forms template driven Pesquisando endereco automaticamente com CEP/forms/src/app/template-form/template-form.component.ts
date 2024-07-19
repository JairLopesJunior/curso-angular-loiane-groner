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
  }

  consultaCEP(cep: string): void {
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this._http.get(`//viacep.com.br/ws/${cep}/json`)
        .subscribe(console.log);
      }
    }
  }
}
