import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlService {
  getHello(): string {
    return 'Hello World!';
  }
}
