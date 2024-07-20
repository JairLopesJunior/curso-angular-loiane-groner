import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      nome: [null],
      email: [null]
    });
  }

  onSubmit(): void {
    this._httpClient.post('enderecaoServer/formUsuario', this.formulario.getRawValue()).subscribe();
  }
}
