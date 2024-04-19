import { Module } from '@nestjs/common';
import { LienKetService } from './lien-ket.service';
import { LienKetController } from './lien-ket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LienKet } from './entities/lien-ket.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([LienKet, CaNhanHtx, AdministrativeUnit])],
  controllers: [LienKetController, CaNhanHtxController, AdministrativeUnitController],
  providers: [LienKetService, CaNhanHtxService, AdministrativeUnitService]
})
export class LienKetModule { }
