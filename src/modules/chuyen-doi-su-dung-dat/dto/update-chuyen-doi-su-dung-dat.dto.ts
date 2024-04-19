import { PartialType } from '@nestjs/swagger';
import { CreateChuyenDoiSuDungDatDto } from './create-chuyen-doi-su-dung-dat.dto';

export class UpdateChuyenDoiSuDungDatDto extends PartialType(CreateChuyenDoiSuDungDatDto) {}
