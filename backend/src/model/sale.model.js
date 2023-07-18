import { Schema, model } from "mongoose";


const productCartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    },
    qty: {
        type: Number
    }

})


const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cart: [ productCartSchema ],
    sold:{
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

export default model('Sale', cartSchema)