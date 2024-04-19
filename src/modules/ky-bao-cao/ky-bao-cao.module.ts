import { Module } from '@nestjs/common';
import { KyBaoCaoService } from './ky-bao-cao.service';
import { KyBaoCaoController } from './ky-bao-cao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KyBaoCao } from './entities/ky-bao-cao.entity';
import { SanXuatTrongTrot } from '../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { SanXuatTrongTrotController } from '../san-xuat-trong-trot/san-xuat-trong-trot.controller';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { SanXuatTrongTrotService } from '../san-xuat-trong-trot/san-xuat-trong-trot.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CropType } from '../crop-type/entities/crop-type.entity';
import { CropTypeController } from '../crop-type/crop-type.controller';
import { CropTypeService } from '../crop-type/crop-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([KyBaoCao, SanXuatTrongTrot, AdministrativeUnit, CropType])],
  controllers: [KyBaoCaoController, SanXuatTrongTrotController, AdministrativeUnitController, CropTypeController],
  providers: [KyBaoCaoService, SanXuatTrongTrotService, AdministrativeUnitService, CropTypeService]
})
export class KyBaoCaoModule { }
