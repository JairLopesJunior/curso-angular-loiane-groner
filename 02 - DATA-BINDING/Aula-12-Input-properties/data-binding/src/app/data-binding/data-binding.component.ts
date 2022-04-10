import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  isMouseOver: boolean = false;
  valorAtual: string = '';
  valorSalvo: string = '';
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado!");
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(event: string) {
    this.valorSalvo = event;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
