import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
}
