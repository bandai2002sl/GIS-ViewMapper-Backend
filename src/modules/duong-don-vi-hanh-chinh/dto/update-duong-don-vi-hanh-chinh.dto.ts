import { PartialType } from '@nestjs/swagger';
import { CreateDuongDonViHanhChinhDto } from './create-duong-don-vi-hanh-chinh.dto';

export class UpdateDuongDonViHanhChinhDto extends PartialType(CreateDuongDonViHanhChinhDto) {}
