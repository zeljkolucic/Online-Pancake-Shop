"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dodatak_controller_1 = require("../controllers/dodatak.controller");
const dodatakRouter = express_1.default.Router();
dodatakRouter.route('/dohvatiSveDodatke').get((req, res) => new dodatak_controller_1.DodatakController().dohvatiSveDodatke(req, res));
exports.default = dodatakRouter;
//# sourceMappingURL=dodatak.js.map