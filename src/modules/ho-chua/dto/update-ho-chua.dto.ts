import { PartialType } from '@nestjs/swagger';
import { CreateHoChuaDto } from './create-ho-chua.dto';

export class UpdateHoChuaDto extends PartialType(CreateHoChuaDto) {}
