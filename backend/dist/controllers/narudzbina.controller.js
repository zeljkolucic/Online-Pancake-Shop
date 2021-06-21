"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NarudzbinaController = void 0;
const narudzbina_1 = __importDefault(require("../models/narudzbina"));
class NarudzbinaController {
    constructor() {
        this.dohvatiSveNarudzbine = (req, res) => {
            narudzbina_1.default.find({}, (err, narudzbine) => {
                if (err)
                    console.log(err);
                else
                    res.json(narudzbine);
            });
        };
        this.prihvati = (req, res) => {
            let idN = req.body.idN;
            let status = 'Prihvaceno';
            narudzbina_1.default.collection.updateOne({ 'idN': idN }, { $set: { 'status': status } });
            res.json({ poruka: 'ok' });
        };
        this.odbij = (req, res) => {
            let idN = req.body.idN;
            let status = 'Odbijeno';
            narudzbina_1.default.collection.updateOne({ 'idN': idN }, { $set: { 'status': status } });
            res.json({ poruka: 'ok' });
        };
        this.naruci = (req, res) => {
            narudzbina_1.default.find({}, (err, narudzbine) => {
                if (err)
                    console.log(err);
                else {
                    let idN = narudzbine.length + 1;
                    let narudzbina = new narudzbina_1.default(req.body);
                    narudzbina.id = idN;
                    narudzbina.save().then(narudzbina => { res.json({ 'message': 'ok' }); }).catch(err => {
                        res.json(err);
                    });
                }
            });
        };
        this.dohvatiMojeNarudzbine = (req, res) => {
            let kupac = req.body.kupac;
            narudzbina_1.default.find({ 'kupac': kupac }, (err, narudzbine) => {
                if (err)
                    console.log(err);
                else
                    res.json(narudzbine);
            });
        };
    }
}
exports.NarudzbinaController = NarudzbinaController;
//# sourceMappingURL=narudzbina.controller.js.map