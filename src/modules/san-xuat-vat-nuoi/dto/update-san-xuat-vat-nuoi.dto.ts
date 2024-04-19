import { PartialType } from '@nestjs/swagger';
import { CreateSanXuatVatNuoiDto } from './create-san-xuat-vat-nuoi.dto';

export class UpdateSanXuatVatNuoiDto extends PartialType(CreateSanXuatVatNuoiDto) {}
