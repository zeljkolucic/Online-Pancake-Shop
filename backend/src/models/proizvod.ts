import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Proizvod = new Schema(
    {
        naziv: {
            type: String
        }
    }
)

export default mongoose.model('Proizvod', Proizvod, 'proizvodi');