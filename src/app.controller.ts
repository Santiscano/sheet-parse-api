import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('/test')
  getHello(): Record<string, string> {
    this.logger.log('Hello World!');
    return this.appService.getHello();
  }
}
