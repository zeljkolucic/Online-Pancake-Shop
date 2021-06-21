import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { Narudzbina } from 'src/models/narudzbina';
import { Proizvod } from 'src/models/proizvod';
import { KorisnikService } from '../korisnik.service';
import { NarudzbinaService } from '../narudzbina.service';
import { ProizvodService } from '../proizvod.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private narudzbinaService: NarudzbinaService, private router: Router, private proizvodService: ProizvodService,
    private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiSveProizvode();
    this.dohvatiMojeNarudzbine();
  }

  korisnik: Korisnik;
  proizvodi: Proizvod[];
  proizvod: string;
  narudzbine: Narudzbina[];

  dohvatiSveProizvode() {
    this.proizvodService.dohvatiSveProizvode().subscribe((proizvodi: Proizvod[]) => {
      this.proizvodi = proizvodi;
    })
  }

  izaberi() {
    if(this.proizvod != null) {
      localStorage.setItem('odabraniProizvod', JSON.stringify(this.proizvod));
      this.router.navigate(['narudzbina']);
    }
  }

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }

  prihvaceno(narudzbina) {
    return narudzbina.status == 'Prihvaceno';
  }

  odbijeno(narudzbina) {
    return narudzbina.status = 'Odbijeno';
  }

  dohvatiMojeNarudzbine() {
    this.narudzbinaService.dohvatiMojeNarudzbine(this.korisnik.kor_ime).subscribe((narudzbine: Narudzbina[]) => {
      if(narudzbine) {
        this.narudzbine = narudzbine;
        for(let i = 0; i < this.narudzbine.length; i++) {
          this.korisnikService.dohvatiKorisnika(this.narudzbine[i].kupac).subscribe((kor: Korisnik) => {
            if(kor) {
              this.narudzbine[i].ime = kor.ime;
              this.narudzbine[i].prezime = kor.prezime;
            }
          })
        }
      }
    })
  }

}
