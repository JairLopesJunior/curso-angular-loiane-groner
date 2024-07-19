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

  onSubmit(form: any): void {
    console.log(form);
  }
}
