import { Module } from '@nestjs/common';
import { KenhMuongService } from './kenh-muong.service';
import { KenhMuongController } from './kenh-muong.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KenhMuong } from './entities/kenh-muong.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    KenhMuong,
    AdministrativeUnit
  ])],
  controllers: [
    KenhMuongController,
    AdministrativeUnitController
  ],
  providers: [
    KenhMuongService,
    AdministrativeUnitService
  ]
})
export class KenhMuongModule {}
