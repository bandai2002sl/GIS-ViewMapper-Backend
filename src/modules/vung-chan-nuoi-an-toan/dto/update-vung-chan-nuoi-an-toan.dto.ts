import { PartialType } from '@nestjs/swagger';
import { CreateVungChanNuoiAnToanDto } from './create-vung-chan-nuoi-an-toan.dto';

export class UpdateVungChanNuoiAnToanDto extends PartialType(CreateVungChanNuoiAnToanDto) {}
