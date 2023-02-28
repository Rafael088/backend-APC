import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schemas/order.schemas';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Order', schema: OrderSchema}
    ])
  ],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
