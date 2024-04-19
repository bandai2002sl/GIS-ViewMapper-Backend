import { PartialType } from '@nestjs/swagger';
import { CreateBenhVatNuoiDto } from './create-benh-vat-nuoi.dto';

export class UpdateBenhVatNuoiDto extends PartialType(CreateBenhVatNuoiDto) {}
