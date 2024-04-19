import { PartialType } from '@nestjs/swagger';
import { CreateBenhCayDto } from './create-benh-cay.dto';

export class UpdateBenhCayDto extends PartialType(CreateBenhCayDto) {}
