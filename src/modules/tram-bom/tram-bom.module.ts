import { Module } from '@nestjs/common';
import { TramBomService } from './tram-bom.service';
import { TramBomController } from './tram-bom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TramBom } from './entities/tram-bom.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    TramBom,
    AdministrativeUnit
  ])],
  controllers: [
    TramBomController,
    AdministrativeUnitController
  ],
  providers: [
    TramBomService,
    AdministrativeUnitService
  ]
})
export class TramBomModule {}
