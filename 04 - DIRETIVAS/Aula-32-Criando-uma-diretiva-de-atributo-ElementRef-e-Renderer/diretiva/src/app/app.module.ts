import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FundoAmareloDirective } from "./shared/fundo-amarelo.directive";
import { DiretivasCustomizadasComponent } from "./diretivas-customizadas/diretivas-customizadas.component";

@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
