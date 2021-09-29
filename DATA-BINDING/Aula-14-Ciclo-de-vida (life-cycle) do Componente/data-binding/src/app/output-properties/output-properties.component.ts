import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit( {novoValor: this.valor} );
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit( {novoValor: this.valor} );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
