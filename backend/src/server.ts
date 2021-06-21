import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import narudzbinaRouter from './routes/narudzbina.routes';
import proizvodRouter from './routes/proizvod.routes';
import dodatakRouter from './routes/dodatak';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/palacinkarnica2021");
const conn = mongoose.connection;
conn.once('open', ()=>{
    console.log("Konekcija sa bazom je uspesna");
})

const router = express.Router();
router.use('/korisnik', korisnikRouter);
router.use('/narudzbina', narudzbinaRouter);
router.use('/proizvod', proizvodRouter);
router.use('/dodatak', dodatakRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));