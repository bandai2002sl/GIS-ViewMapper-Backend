import { Module } from '@nestjs/common';
import { SanXuatTrongTrotService } from './san-xuat-trong-trot.service';
import { SanXuatTrongTrotController } from './san-xuat-trong-trot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SanXuatTrongTrot } from './entities/san-xuat-trong-trot.entity';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CropType } from '../crop-type/entities/crop-type.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { CropTypeController } from '../crop-type/crop-type.controller';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([SanXuatTrongTrot, CropType, AdministrativeUnit, KyBaoCao])],
  controllers: [SanXuatTrongTrotController, CropTypeController, AdministrativeUnitController, KyBaoCaoController],
  providers: [SanXuatTrongTrotService, CropTypeService, AdministrativeUnitService, KyBaoCaoService]
})
export class SanXuatTrongTrotModule { }
