"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const narudzbina_controller_1 = require("../controllers/narudzbina.controller");
const narudzbinaRouter = express_1.default.Router();
narudzbinaRouter.route('/dohvatiSveNarudzbine').get((req, res) => new narudzbina_controller_1.NarudzbinaController().dohvatiSveNarudzbine(req, res));
narudzbinaRouter.route('/prihvati').post((req, res) => new narudzbina_controller_1.NarudzbinaController().prihvati(req, res));
narudzbinaRouter.route('/odbij').post((req, res) => new narudzbina_controller_1.NarudzbinaController().odbij(req, res));
narudzbinaRouter.route('/naruci').post((req, res) => new narudzbina_controller_1.NarudzbinaController().naruci(req, res));
narudzbinaRouter.route('/dohvatiMojeNarudzbine').post((req, res) => new narudzbina_controller_1.NarudzbinaController().dohvatiMojeNarudzbine(req, res));
exports.default = narudzbinaRouter;
//# sourceMappingURL=narudzbina.routes.js.map