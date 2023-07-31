import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cart: [],
    sold: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

export default model('Sale', cartSchema)