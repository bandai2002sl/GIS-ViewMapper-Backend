import { Module } from '@nestjs/common';
import { SanXuatThuySanService } from './san-xuat-thuy-san.service';
import { SanXuatThuySanController } from './san-xuat-thuy-san.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SanXuatThuySan } from './entities/san-xuat-thuy-san.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { ThuySan } from '../thuy-san/entities/thuy-san.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { ThuySanController } from '../thuy-san/thuy-san.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { ThuySanService } from '../thuy-san/thuy-san.service';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([SanXuatThuySan, CaNhanHtx, ThuySan, AdministrativeUnit, KyBaoCao])],
  controllers: [SanXuatThuySanController, CaNhanHtxController, ThuySanController, AdministrativeUnitController, KyBaoCaoController],
  providers: [SanXuatThuySanService, CaNhanHtxService, ThuySanService, AdministrativeUnitService, KyBaoCaoService]
})
export class SanXuatThuySanModule { }
