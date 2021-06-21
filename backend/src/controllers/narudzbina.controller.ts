import express from 'express';
import Narudzbina from '../models/narudzbina';

export class NarudzbinaController {

    dohvatiSveNarudzbine = (req: express.Request, res: express.Response) => {
        Narudzbina.find({}, (err, narudzbine) => {
            if(err) console.log(err);
            else res.json(narudzbine);          
        })
    }

    prihvati = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        let status = 'Prihvaceno';
        Narudzbina.collection.updateOne({'idN': idN}, {$set: {'status' : status}});
        res.json({poruka:'ok'})
    }

    odbij = (req: express.Request, res: express.Response) => {
        let idN = req.body.idN;
        let status = 'Odbijeno';
        Narudzbina.collection.updateOne({'idN': idN}, {$set: {'status' : status}});
        res.json({poruka:'ok'})
    }

    naruci = (req: express.Request, res: express.Response) => {
        Narudzbina.find({}, (err, narudzbine) => {
            if(err) console.log(err);
            else {
                let idN = narudzbine.length + 1;
                let narudzbina = new Narudzbina(req.body);
                narudzbina.id = idN;
                narudzbina.save().then(narudzbina => {res.json({'message': 'ok'})}).catch(err => {
                    res.json(err);
                })
            }
        })
    }

    dohvatiMojeNarudzbine = (req: express.Request, res: express.Response) => {
        let kupac = req.body.kupac;
        Narudzbina.find({'kupac': kupac}, (err, narudzbine) => {
            if(err) console.log(err);
            else res.json(narudzbine);
        })
    }

}