import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/models/korisnik';
import { Narudzbina } from 'src/models/narudzbina';
import { KorisnikService } from '../korisnik.service';
import { NarudzbinaService } from '../narudzbina.service';

@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit {

  constructor(private narudzbinaService: NarudzbinaService, private router: Router, private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiSveNarudzbine();
  }

  korisnik: Korisnik;
  narudzbine: Narudzbina[];

  dohvatiSveNarudzbine() {
    this.narudzbinaService.dohvatiSveNarudzbine().subscribe((narudzbine: Narudzbina[]) => {
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

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }

  prihvaceno(narudzbina) {
    return narudzbina.status == 'Prihvaceno';
  }

  neobradjeno(narudzbina) {
    return narudzbina.status == 'Neobradjeno';
  }

  prihvati(narudzbina) {
    this.narudzbinaService.prihvati(parseInt(narudzbina.idN)).subscribe((res) => {
      if(res['poruka'] == 'ok') {
        location.reload();
      }
    })
  }

  odbij(narudzbina) {
    this.narudzbinaService.odbij(parseInt(narudzbina.idN)).subscribe((res) => {
      if(res['poruka'] == 'ok') {
        location.reload();
      }
    })
  }

}
