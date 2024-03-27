import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUrlDto } from './dto/add-url.dto';
import { UrlDto } from './dto/url.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UrlService {
  constructor(private readonly prisma: PrismaService) {}

  async addUrl(urlDto: AddUrlDto): Promise<UrlDto> {
    const key = uuidv4();
    const url = await this.prisma.url.findFirst({
      where: { long_url: urlDto.long_url },
    });
    if (url) {
      return UrlDto.toDto(url);
    }
    const res = await this.prisma.url.create({
      data: {
        key: key,
        long_url: urlDto.long_url,
        short_url: 'http://localhost:3000/url/' + key,
      },
    });

    return UrlDto.toDto(res);
  }

  async sendRedirect(key: string) {
    const url = await this.prisma.url.findFirst({
      where: { key: key },
    });

    if (!url) {
      throw new NotFoundException('URL not found');
    }

    return url.long_url;
  }

  async findAll(): Promise<UrlDto[]> {
    const results = await this.prisma.url.findMany();

    return results.map((url) => UrlDto.toDto(url));
  }
}
