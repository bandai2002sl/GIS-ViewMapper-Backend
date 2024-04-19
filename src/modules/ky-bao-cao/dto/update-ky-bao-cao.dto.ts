import { PartialType } from '@nestjs/swagger';
import { CreateKyBaoCaoDto } from './create-ky-bao-cao.dto';

export class UpdateKyBaoCaoDto extends PartialType(CreateKyBaoCaoDto) {}
