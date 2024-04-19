import { PartialType } from '@nestjs/swagger';
import { CreateHanHanDto } from './create-han-han.dto';

export class UpdateHanHanDto extends PartialType(CreateHanHanDto) {}
