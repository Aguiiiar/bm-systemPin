import { Controller, Get, Post, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Gets
  @Get("/")
  Bm(): string {
    return this.appService.Bm();
  }

  @Get("/checkPin") 
  checkPin(@Query("pin") pin: string): string {

    // ?pin=%PIN%
    return this.appService.checkPin(pin);
  }

  // Posts
  @Post("/gen/:pin")
  genPin(@Param() token: string): string {
    return this.appService.genPin(token);
  }
}
