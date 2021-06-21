import express from 'express';
import { NarudzbinaController } from '../controllers/narudzbina.controller';

const narudzbinaRouter = express.Router();

narudzbinaRouter.route('/dohvatiSveNarudzbine').get(
    (req, res) => new NarudzbinaController().dohvatiSveNarudzbine(req, res)
)

narudzbinaRouter.route('/prihvati').post(
    (req, res) => new NarudzbinaController().prihvati(req, res)
)

narudzbinaRouter.route('/odbij').post(
    (req, res) => new NarudzbinaController().odbij(req, res)
)

narudzbinaRouter.route('/naruci').post(
    (req, res) => new NarudzbinaController().naruci(req, res)    
)

narudzbinaRouter.route('/dohvatiMojeNarudzbine').post(
    (req, res) => new NarudzbinaController().dohvatiMojeNarudzbine(req, res)
)

export default narudzbinaRouter;