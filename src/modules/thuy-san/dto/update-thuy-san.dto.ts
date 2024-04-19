import { PartialType } from '@nestjs/swagger';
import { CreateThuySanDto } from './create-thuy-san.dto';

export class UpdateThuySanDto extends PartialType(CreateThuySanDto) {}
