import { Module } from '@nestjs/common';
import { DuongDonViHanhChinhService } from './duong-don-vi-hanh-chinh.service';
import { DuongDonViHanhChinhController } from './duong-don-vi-hanh-chinh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuongDonViHanhChinh } from './entities/duong-don-vi-hanh-chinh.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([DuongDonViHanhChinh, AdministrativeUnit])],
  controllers: [DuongDonViHanhChinhController, AdministrativeUnitController],
  providers: [DuongDonViHanhChinhService, AdministrativeUnitService]
})
export class DuongDonViHanhChinhModule { }
