import { Document } from "mongoose";

export interface Order extends Document {
    readonly mesa: number;
    readonly idUser: string;
    readonly listProducts: Array<Order>;
    readonly price: number;
    readonly createDate: Date;
}