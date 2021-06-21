import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DodatakService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveDodatke() {
    return this.http.get(`${this.uri}/dodatak/dohvatiSveDodatke`);
  }
}
