import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  API = 'http://viacep.com.br/ws/'

  constructor(private http: HttpClient) { }

  getConsultaCep(cep: string) {
    return this.http.get(`${this.API}${cep}/json`);
  }
}
