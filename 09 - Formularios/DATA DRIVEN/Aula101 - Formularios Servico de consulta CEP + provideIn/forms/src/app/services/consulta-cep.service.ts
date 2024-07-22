import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private _httpClient: HttpClient) { }

  consultaCEP(cep: string): any {
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this._httpClient.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
  }
}
