/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('test')
  // eslint-disable-next-line prettier/prettier
  createGroupCategory(@Body() body: any) {
    return this.appService.create(body);
  }

  @MessagePattern('CREATE-GROUP-CATEGORY')
  create(@Payload() data: any) {
    return this.appService.create(data);
  }

  @MessagePattern('GET-ALL-GROUP-CATEGORY')
  getAllByUserId(@Payload() data: any) {
    return this.appService.getAllByUserId(data.userId);
  }
}
