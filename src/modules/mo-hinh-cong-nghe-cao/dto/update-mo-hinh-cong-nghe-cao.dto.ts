import { PartialType } from '@nestjs/swagger';
import { CreateMoHinhCongNgheCaoDto } from './create-mo-hinh-cong-nghe-cao.dto';

export class UpdateMoHinhCongNgheCaoDto extends PartialType(CreateMoHinhCongNgheCaoDto) {}
