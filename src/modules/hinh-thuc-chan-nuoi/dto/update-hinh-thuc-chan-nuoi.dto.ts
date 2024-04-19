import { PartialType } from '@nestjs/swagger';
import { CreateHinhThucChanNuoiDto } from './create-hinh-thuc-chan-nuoi.dto';

export class UpdateHinhThucChanNuoiDto extends PartialType(CreateHinhThucChanNuoiDto) {}
