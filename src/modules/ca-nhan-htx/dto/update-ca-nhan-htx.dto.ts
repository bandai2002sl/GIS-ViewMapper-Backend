import { PartialType } from '@nestjs/swagger';
import { CreateCaNhanHtxDto } from './create-ca-nhan-htx.dto';

export class UpdateCaNhanHtxDto extends PartialType(CreateCaNhanHtxDto) {}
