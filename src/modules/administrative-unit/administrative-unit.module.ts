import { Module } from '@nestjs/common';
import { AdministrativeUnitService } from './administrative-unit.service';
import { AdministrativeUnit } from './entities/administrative-unit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrativeUnitController } from './administrative-unit.controller';
import { SanXuatTrongTrot } from '../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity';
import { SanXuatTrongTrotController } from '../san-xuat-trong-trot/san-xuat-trong-trot.controller';
import { SanXuatTrongTrotService } from '../san-xuat-trong-trot/san-xuat-trong-trot.service';
import { CropType } from '../crop-type/entities/crop-type.entity';
import { CropTypeController } from '../crop-type/crop-type.controller';
import { CropTypeService } from '../crop-type/crop-type.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';


@Module({
  imports: [TypeOrmModule.forFeature([AdministrativeUnit, SanXuatTrongTrot, CropType, KyBaoCao])],
  controllers: [AdministrativeUnitController, SanXuatTrongTrotController, CropTypeController, KyBaoCaoController],
  providers: [AdministrativeUnitService, SanXuatTrongTrotService, CropTypeService, KyBaoCaoService]
})
export class AdministrativeUnitModule { }
