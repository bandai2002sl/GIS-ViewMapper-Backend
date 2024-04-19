import { Module } from '@nestjs/common';
import { CongService } from './cong.service';
import { CongController } from './cong.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cong } from './entities/cong.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    Cong,
    AdministrativeUnit
  ])],
  controllers: [
    CongController,
    AdministrativeUnitController,
  ],
  providers: [
    CongService,
    AdministrativeUnitService
  ]
})
export class CongModule {}
