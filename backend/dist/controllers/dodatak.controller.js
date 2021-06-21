"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DodatakController = void 0;
const dodatak_1 = __importDefault(require("../models/dodatak"));
class DodatakController {
    constructor() {
        this.dohvatiSveDodatke = (req, res) => {
            dodatak_1.default.find({}, (err, dodaci) => {
                if (err)
                    console.log(err);
                else
                    res.json(dodaci);
            });
        };
    }
}
exports.DodatakController = DodatakController;
//# sourceMappingURL=dodatak.controller.js.map