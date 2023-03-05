import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuService } from './menu/menu.service';
import { MenuController } from './menu/menu.controller';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [ 
    UsersModule, 
    OrderModule, 
    MongooseModule.forRoot('mongodb+srv://apuracosta:Tjvh9zs0MDS4bNfB@apc.czkqeld.mongodb.net/?retryWrites=true&w=majority'), MenuModule
  ],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService],
})
export class AppModule {}






