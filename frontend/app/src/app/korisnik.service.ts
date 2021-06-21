import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  prijava(kor_ime, lozinka, tip) {
    const podaci = {
      kor_ime: kor_ime,
      lozinka: lozinka,
      tip: tip
    }
    return this.http.post(`${this.uri}/korisnik/prijava`, podaci);
  }

  dohvatiKorisnika(kor_ime) {
    const podaci = {
      kor_ime: kor_ime
    }
    return this.http.post(`${this.uri}/korisnik/dohvatiKorisnika`, podaci);
  }

}
