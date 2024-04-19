import { PartialType } from '@nestjs/swagger';
import { CreateLoaiKinhDoanhDto } from './create-loai-kinh-doanh.dto';

export class UpdateLoaiKinhDoanhDto extends PartialType(CreateLoaiKinhDoanhDto) {}
