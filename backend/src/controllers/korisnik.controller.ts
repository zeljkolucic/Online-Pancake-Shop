import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController {

    prijava = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let lozinka = req.body.lozinka;
        let tip = req.body.tip;
        Korisnik.findOne({'kor_ime': kor_ime, 'lozinka': lozinka, 'tip': tip}, (err, kor) => {
            if(err) console.log(err);
            else res.json(kor);
        })
    }

    dohvatiKorisnika = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        Korisnik.findOne({'kor_ime': kor_ime}, (err, kor) => {
            if(err) console.log(err);
            else res.json(kor);
        })
    }

}