import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-campo-erro',
  templateUrl: './control-campo-erro.component.html',
  styleUrls: ['./control-campo-erro.component.css']
})
export class ControlCampoErroComponent implements OnInit {

  @Input() mostrarErro: boolean = false;
  @Input() msgErro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
