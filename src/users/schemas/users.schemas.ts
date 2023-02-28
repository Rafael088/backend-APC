import { Schema } from "mongoose";

export const UserSchema = new Schema({

    email:String,
    password:String,
    createDate: {
        type: Date,
        default: Date.now
    }
})

