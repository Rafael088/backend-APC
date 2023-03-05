import { Schema } from "mongoose";

export const OrderSchema = new Schema({

    numeroMesa: Number,
    listProducts: Array,
    state: String,
    createDate: {
        type: Date,
        default: Date.now
    }
})

