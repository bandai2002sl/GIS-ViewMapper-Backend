import { PartialType } from '@nestjs/swagger';
import { CreateSanXuatThuySanDto } from './create-san-xuat-thuy-san.dto';

export class UpdateSanXuatThuySanDto extends PartialType(CreateSanXuatThuySanDto) {}
