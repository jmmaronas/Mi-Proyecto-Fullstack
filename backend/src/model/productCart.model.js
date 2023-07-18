import { Schema, model } from "mongoose";


const productCartSchema = new Schema({    
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    qty:{
        type: Number
    }

})

export default model('PorductCart', productCartSchema)