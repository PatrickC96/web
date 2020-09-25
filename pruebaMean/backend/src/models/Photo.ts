import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    price:Number,
    availability:Number,
    imagePath: String
});

export interface IPhoto extends Document {
    title: string;
    description: string;
    price:Number;
    availability:Number;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);