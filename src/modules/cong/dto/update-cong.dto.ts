import { PartialType } from '@nestjs/swagger';
import { CreateCongDto } from './create-cong.dto';

export class UpdateCongDto extends PartialType(CreateCongDto) {}
