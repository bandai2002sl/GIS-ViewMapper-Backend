import { Module } from '@nestjs/common';
import { SanXuatVatNuoiService } from './san-xuat-vat-nuoi.service';
import { SanXuatVatNuoiController } from './san-xuat-vat-nuoi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SanXuatVatNuoi } from './entities/san-xuat-vat-nuoi.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { VatNuoi } from '../vat-nuoi/entities/vat-nuoi.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { VatNuoiController } from '../vat-nuoi/vat-nuoi.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([SanXuatVatNuoi, CaNhanHtx, VatNuoi, AdministrativeUnit, KyBaoCao])],
  controllers: [SanXuatVatNuoiController, CaNhanHtxController, VatNuoiController, AdministrativeUnitController, KyBaoCaoController],
  providers: [SanXuatVatNuoiService, CaNhanHtxService, VatNuoiService, AdministrativeUnitService, KyBaoCaoService]
})
export class SanXuatVatNuoiModule { }
