import { Controller, Get } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  getHello(): string {
    return this.urlService.getHello();
  }
}
