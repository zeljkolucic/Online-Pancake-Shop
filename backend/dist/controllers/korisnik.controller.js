"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let lozinka = req.body.lozinka;
            let tip = req.body.tip;
            korisnik_1.default.findOne({ 'kor_ime': kor_ime, 'lozinka': lozinka, 'tip': tip }, (err, kor) => {
                if (err)
                    console.log(err);
                else
                    res.json(kor);
            });
        };
        this.dohvatiKorisnika = (req, res) => {
            let kor_ime = req.body.kor_ime;
            korisnik_1.default.findOne({ 'kor_ime': kor_ime }, (err, kor) => {
                if (err)
                    console.log(err);
                else
                    res.json(kor);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map