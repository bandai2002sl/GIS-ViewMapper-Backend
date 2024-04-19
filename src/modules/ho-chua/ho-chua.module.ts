import { Module } from '@nestjs/common';
import { HoChuaService } from './ho-chua.service';
import { HoChuaController } from './ho-chua.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoChua } from './entities/ho-chua.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    HoChua,
    AdministrativeUnit,
  ])],
  controllers: [
    HoChuaController,
    AdministrativeUnitController,
  ],
  providers: [
    HoChuaService,
    AdministrativeUnitService,
  ]
})
export class HoChuaModule {}
