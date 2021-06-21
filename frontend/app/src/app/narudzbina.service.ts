import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveNarudzbine() {
    return this.http.get(`${this.uri}/narudzbina/dohvatiSveNarudzbine`);
  }

  prihvati(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/narudzbina/prihvati`, podaci);
  }

  odbij(idN) {
    const podaci = {
      idN: idN
    }
    return this.http.post(`${this.uri}/narudzbina/odbij`, podaci);
  }

  naruci(datum, kupac, proizvod, dodaci, status, idN) {
    const podaci = {
      idN: idN,
      proizvod: proizvod,
      kupac: kupac,
      dodaci: dodaci,
      datum: datum,
      status: status
    }
    return this.http.post(`${this.uri}/narudzbina/naruci`, podaci);
  }

  dohvatiMojeNarudzbine(kupac) {
    const podaci = {
      kupac: kupac
    }
    return this.http.post(`${this.uri}/narudzbina/dohvatiMojeNarudzbine`, podaci);
  }

}
