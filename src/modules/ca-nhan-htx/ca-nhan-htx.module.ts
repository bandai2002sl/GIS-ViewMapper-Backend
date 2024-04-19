import { Module } from '@nestjs/common';
import { CaNhanHtxService } from './ca-nhan-htx.service';
import { CaNhanHtxController } from './ca-nhan-htx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaNhanHtx } from './entities/ca-nhan-htx.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([CaNhanHtx, AdministrativeUnit])],
  controllers: [CaNhanHtxController, AdministrativeUnitController],
  providers: [CaNhanHtxService, AdministrativeUnitService]
})
export class CaNhanHtxModule { }
