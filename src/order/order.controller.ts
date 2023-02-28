import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Res,
    HttpStatus,
    Body
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';


@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post('/create')
    async createOrder(@Res() res, @Body() createOrderDTO: CreateOrderDTO) {
        const order =  await this.orderService.createOrder(createOrderDTO)
            return res.status(HttpStatus.OK).json({
                message: 'order succes create',
                order: order
            });
        
    }
    @Get('/')
    async getOrders(@Res() res){
        const orders = await this.orderService.getOrders()
        return res.status(HttpStatus.OK).json({
            message: 'order succes geting',
            orders: orders
        });
    }
}
