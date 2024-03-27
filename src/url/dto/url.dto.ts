import { Url } from '@prisma/client';
import { plainToClass } from 'class-transformer';

export class UrlDto {
  short_url: string;

  static toDto(url: Url): UrlDto {
    return plainToClass(UrlDto, url);
  }
}
