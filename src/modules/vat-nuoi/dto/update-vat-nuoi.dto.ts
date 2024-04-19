import { PartialType } from '@nestjs/swagger';
import { CreateVatNuoiDto } from './create-vat-nuoi.dto';

export class UpdateVatNuoiDto extends PartialType(CreateVatNuoiDto) {}
