import { Module } from '@nestjs/common';
import { TauCaService } from './tau-ca.service';
import { TauCaController } from './tau-ca.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TauCa } from './entities/tau-ca.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';

@Module({
  imports:[TypeOrmModule.forFeature([
    TauCa,
    AdministrativeUnit,
    CaNhanHtx
  ])],
  controllers: [
    TauCaController,
    AdministrativeUnitController,
    CaNhanHtxController
  ],
  providers: [TauCaService,
    AdministrativeUnitService,
    CaNhanHtxService
  ]
})
export class TauCaModule {}
