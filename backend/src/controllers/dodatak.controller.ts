import express from 'express';
import Dodatak from '../models/dodatak';

export class DodatakController {

    dohvatiSveDodatke = (req: express.Request, res: express.Response) => {
        Dodatak.find({}, (err, dodaci) => {
            if(err) console.log(err);
            else res.json(dodaci);
        })
    }

}