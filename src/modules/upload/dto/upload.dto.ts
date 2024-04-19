import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class QueryDelete {
  @ApiProperty({ example: '1' })
  @IsString()
  id: string;
}
