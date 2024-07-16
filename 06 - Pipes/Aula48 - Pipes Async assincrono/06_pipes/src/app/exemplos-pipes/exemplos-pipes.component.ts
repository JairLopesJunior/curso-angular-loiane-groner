import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co.gsdfsvioc'
  }

  livros: string[] = ['Java', 'Angular 2'];

  filtro: any;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000)
    .map((valor: any) => 'Valor assincrono');

  constructor() { }

  ngOnInit(): void {
    
  }

  addCurso(value: string): void {
    this.livros.push(value);
  }

  obterCursos(): any {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      (v: any) => {
        if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
          return true;
        }
        return false;
      }
    );
  }
}
