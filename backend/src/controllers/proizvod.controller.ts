import express from 'express';
import Proizvod from '../models/proizvod';

export class ProizvodController {

    dohvatiSveProizvode = (req: express.Request, res: express.Response) => {
        Proizvod.find({}, (err, proizvodi) => {
            if(err) console.log(err);
            else res.json(proizvodi);
        })
    }

}