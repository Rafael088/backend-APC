import { Schema } from "mongoose";

export const OrderSchema = new Schema({

    mesa: Number,
    idUser: String,
    listProducts: Array,
    price: Number,
    createDate: {
        type: Date,
        default: Date.now
    }
})

