import { PartialType } from '@nestjs/swagger';
import { CreateVungDonViHanhChinhDto } from './create-vung-don-vi-hanh-chinh.dto';

export class UpdateVungDonViHanhChinhDto extends PartialType(CreateVungDonViHanhChinhDto) {}
