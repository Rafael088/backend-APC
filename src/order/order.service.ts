import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interfaces';
import { CreateOrderDTO } from './dto/order.dto';


@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModels: Model<Order>){}

    async getOrders(): Promise<Order[]> {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00 para comparar solo la fecha
      
        const orders = await this.orderModels.find({
          createDate: {
            $gte: today,
            $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) // Agregar 24 horas para incluir órdenes hasta el final del día
          }
        });
        return orders;
    }
    async createOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
        const order = new this.orderModels(createOrderDTO)
        await order.save()
        return order
    }

}
