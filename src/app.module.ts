import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://sakamoto_keisuke:<password>@cluster0.a7fxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
