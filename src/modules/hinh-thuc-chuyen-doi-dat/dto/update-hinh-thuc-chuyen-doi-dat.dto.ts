import { PartialType } from '@nestjs/swagger';
import { CreateHinhThucChuyenDoiDatDto } from './create-hinh-thuc-chuyen-doi-dat.dto';

export class UpdateHinhThucChuyenDoiDatDto extends PartialType(CreateHinhThucChuyenDoiDatDto) {}
