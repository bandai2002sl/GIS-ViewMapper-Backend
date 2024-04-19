import { Module } from '@nestjs/common';
import { VungDonViHanhChinhService } from './vung-don-vi-hanh-chinh.service';
import { VungDonViHanhChinhController } from './vung-don-vi-hanh-chinh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VungDonViHanhChinh } from './entities/vung-don-vi-hanh-chinh.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([VungDonViHanhChinh, AdministrativeUnit])],
  controllers: [VungDonViHanhChinhController, AdministrativeUnitController],
  providers: [VungDonViHanhChinhService, AdministrativeUnitService]
})
export class VungDonViHanhChinhModule { }
