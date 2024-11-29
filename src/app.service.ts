import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): Record<string, string> {
    this.logger.log('Hello World!');
    return {
      message: 'Hello World!',
    };
  }
}
