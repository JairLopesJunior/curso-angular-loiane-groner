import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { ControlCampoErroComponent } from '../control-campo-erro/control-campo-erro.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    ControlCampoErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
