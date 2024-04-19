import { Module } from '@nestjs/common';
import { CoSoCheBienService } from './co-so-che-bien.service';
import { CoSoCheBienController } from './co-so-che-bien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoSoCheBien } from './entities/co-so-che-bien.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoSoCheBien, AdministrativeUnit, CaNhanHtx, KyBaoCao])],
  controllers: [CoSoCheBienController, AdministrativeUnitController, CaNhanHtxController, KyBaoCaoController],
  providers: [CoSoCheBienService, AdministrativeUnitService, CaNhanHtxService, KyBaoCaoService]
})
export class CoSoCheBienModule { }
