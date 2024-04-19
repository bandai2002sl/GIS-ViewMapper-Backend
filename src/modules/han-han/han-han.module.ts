import { Module } from '@nestjs/common';
import { HanHanService } from './han-han.service';
import { HanHanController } from './han-han.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HanHan } from './entities/han-han.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { CropType } from '../crop-type/entities/crop-type.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { CropTypeController } from '../crop-type/crop-type.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CropTypeService } from '../crop-type/crop-type.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([HanHan, AdministrativeUnit, CropType, KyBaoCao])],
  controllers: [HanHanController, AdministrativeUnitController, CropTypeController, KyBaoCaoController],
  providers: [HanHanService, AdministrativeUnitService, CropTypeService, KyBaoCaoService]
})
export class HanHanModule { }
