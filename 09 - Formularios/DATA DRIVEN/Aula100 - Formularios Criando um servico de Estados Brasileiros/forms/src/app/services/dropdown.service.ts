import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  getEstadosBr(): any {
    return [
      {
        "id": 1,
        "sigla": "AC",
        "nome": "Acre"
      },
      {
        "id": 2,
        "sigla": "AL",
        "nome": "Alagoas"
      }
    ];
  }
}
