import express from 'express';
import { DodatakController } from '../controllers/dodatak.controller';

const dodatakRouter = express.Router();

dodatakRouter.route('/dohvatiSveDodatke').get(
    (req, res) => new DodatakController().dohvatiSveDodatke(req, res)
)

export default dodatakRouter;