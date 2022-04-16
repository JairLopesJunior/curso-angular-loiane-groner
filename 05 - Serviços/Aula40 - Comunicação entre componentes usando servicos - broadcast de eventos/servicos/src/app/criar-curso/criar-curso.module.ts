import { ReceberCursoCriadoComponent } from './../receber-curso-criado/receber-curso-criado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCursoComponent } from '../criar-curso/criar-curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  exports: [CriarCursoComponent]
})
export class CriarCursoModule { }
