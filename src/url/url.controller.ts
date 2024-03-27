import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { AddUrlDto } from './dto/add-url.dto';
import { UrlDto } from './dto/url.dto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  getAll() {
    return this.urlService.findAll();
  }

  @Get(':key')
  @Redirect('', 302)
  async redirectUrl(@Param('key') key: string) {
    return { url: await this.urlService.sendRedirect(key) };
  }

  @Post()
  createUrl(@Body() urlDto: AddUrlDto): Promise<UrlDto> {
    return this.urlService.addUrl(urlDto);
  }

  @Delete(':short_url')
  removeUrl(@Param('short_url') short_url: string): Promise<UrlDto> {
    const key = short_url.split('/').pop();
    return this.urlService.removeUrl(key);
  }
}
