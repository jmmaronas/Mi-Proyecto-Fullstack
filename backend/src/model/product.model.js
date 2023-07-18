import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
},
    {
        timestamps: true
    }
)
export default model('Product', productSchema)