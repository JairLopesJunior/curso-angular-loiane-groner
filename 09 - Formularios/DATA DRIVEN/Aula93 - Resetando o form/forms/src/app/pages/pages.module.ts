import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ControlCampoErroComponent } from '../control-campo-erro/control-campo-erro.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { DataFormComponent } from './data-form/data-form.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    ControlCampoErroComponent,
    FormDebugComponent,
    DataFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class PagesModule { }