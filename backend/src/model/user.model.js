import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        uniqued: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String
    },
    province: {
        type: String
    },
    location: {
        type: String
    },
    cp: {
        type: Number
    },
    role: {
        type: String,
        default: "user"
    } 
}, {
    timestamps: true
})

export default model('User', userSchema)