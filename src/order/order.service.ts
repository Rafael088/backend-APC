import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interfaces';
import { CreateOrderDTO } from './dto/order.dto';


@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModels: Model<Order>){}

    async getOrders(): Promise<Order[]> {
        const orders = await this.orderModels.find()
        return orders
    }
    async createOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
        const order = new this.orderModels(createOrderDTO)
        await order.save()
        return order
    }

}
