/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupCategory, GroupCategorytSchema } from './schema/groupcategory.schema';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.MONGO_DNS),
    MongooseModule.forFeature([{ name: GroupCategory.name, schema: GroupCategorytSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
