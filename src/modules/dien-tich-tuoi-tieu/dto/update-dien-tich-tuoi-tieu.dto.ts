import { PartialType } from '@nestjs/swagger';
import { CreateDienTichTuoiTieuDto } from './create-dien-tich-tuoi-tieu.dto';

export class UpdateDienTichTuoiTieuDto extends PartialType(CreateDienTichTuoiTieuDto) {}
