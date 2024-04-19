import { Module } from '@nestjs/common';
import { BenhCayService } from './benh-cay.service';
import { BenhCayController } from './benh-cay.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenhCay } from './entities/benh-cay.entity';
import { CropType } from '../crop-type/entities/crop-type.entity';
import { LoaiBenh } from '../loai-benh/entities/loai-benh.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { CropTypeController } from '../crop-type/crop-type.controller';
import { LoaiBenhController } from '../loai-benh/loai-benh.controller';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { CropTypeService } from '../crop-type/crop-type.service';
import { LoaiBenhService } from '../loai-benh/loai-benh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([BenhCay, CropType, LoaiBenh, AdministrativeUnit, KyBaoCao])],
  controllers: [BenhCayController, CropTypeController, LoaiBenhController, AdministrativeUnitController, KyBaoCaoController],
  providers: [BenhCayService, CropTypeService, LoaiBenhService, AdministrativeUnitService, KyBaoCaoService]
})
export class BenhCayModule { }
