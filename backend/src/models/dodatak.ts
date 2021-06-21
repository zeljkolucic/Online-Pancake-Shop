import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Dodatak = new Schema(
    {
        naziv: {
            type: String
        }
    }
)

export default mongoose.model('Dodatak', Dodatak, 'dodaci');