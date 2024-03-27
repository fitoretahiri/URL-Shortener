import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddUrlDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  long_url: string;
}
