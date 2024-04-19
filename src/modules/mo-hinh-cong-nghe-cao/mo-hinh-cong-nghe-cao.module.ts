import { Module } from '@nestjs/common';
import { MoHinhCongNgheCaoService } from './mo-hinh-cong-nghe-cao.service';
import { MoHinhCongNgheCaoController } from './mo-hinh-cong-nghe-cao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoHinhCongNgheCao } from './entities/mo-hinh-cong-nghe-cao.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([MoHinhCongNgheCao, CaNhanHtx, AdministrativeUnit])],
  controllers: [MoHinhCongNgheCaoController, CaNhanHtxController, AdministrativeUnitController],
  providers: [MoHinhCongNgheCaoService, CaNhanHtxService, AdministrativeUnitService]
})
export class MoHinhCongNgheCaoModule { }
