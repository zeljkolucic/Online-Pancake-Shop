import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dodatak } from 'src/models/dodatak';
import { Korisnik } from 'src/models/korisnik';
import { Narudzbina } from 'src/models/narudzbina';
import { Proizvod } from 'src/models/proizvod';
import { DodatakService } from '../dodatak.service';
import { NarudzbinaService } from '../narudzbina.service';

@Component({
  selector: 'app-narudzbina',
  templateUrl: './narudzbina.component.html',
  styleUrls: ['./narudzbina.component.css']
})
export class NarudzbinaComponent implements OnInit {

  constructor(private narudzbinaService: NarudzbinaService, private dodatakService: DodatakService, private router: Router) { }

  ngOnInit(): void {
    this.proizvod = JSON.parse(localStorage.getItem('odabraniProizvod'));
    this.dohvatiSveDodatke();
  }

  proizvod: string;
  dodaci: Dodatak[]; 

  naruci() {
    let korisnik: Korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    let proizvod = this.proizvod;
    let datum = '2021-06-19';
    let kupac = korisnik.kor_ime;
    let status = 'Neobradjeno';
    let dodaci: Dodatak[] = [];
    let idN: number = this.dohvatiNajveciIdN() + 1;
    for(let i = 0; i < this.dodaci.length; i++) {
      if(this.dodaci[i].odabran) {
        dodaci.push(this.dodaci[i]);
      }
    }
    this.narudzbinaService.naruci(datum, kupac, proizvod, dodaci, status, idN).subscribe((res) => {
      if(res['poruka'] == 'ok') {
        alert('ok');
      }
    })
    this.router.navigate(['kupac']);
  }

  dohvatiSveDodatke() {
    this.dodatakService.dohvatiSveDodatke().subscribe((dodaci: Dodatak[]) => {
      this.dodaci = dodaci;
    })
  }

  dohvatiNajveciIdN():number  {
    this.narudzbinaService.dohvatiSveNarudzbine().subscribe((narudzbine: Narudzbina[]) => {
      if(narudzbine) {
        return narudzbine.length;
      } 
    })
    return 0;
  }

}
