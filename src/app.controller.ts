import { Controller, Get, Post, Query, Headers } from '@nestjs/common';
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
  @Post("/gen")
  genPin(@Headers('authorization') authorization: string): string {
    return this.appService.genPin(authorization);
  }
}
