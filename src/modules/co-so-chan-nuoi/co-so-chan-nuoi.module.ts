import { Module } from '@nestjs/common';
import { CoSoChanNuoiService } from './co-so-chan-nuoi.service';
import { CoSoChanNuoiController } from './co-so-chan-nuoi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoSoChanNuoi } from './entities/co-so-chan-nuoi.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { VatNuoi } from '../vat-nuoi/entities/vat-nuoi.entity';
import { HinhThucChanNuoi } from '../hinh-thuc-chan-nuoi/entities/hinh-thuc-chan-nuoi.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { VatNuoiController } from '../vat-nuoi/vat-nuoi.controller';
import { HinhThucChanNuoiController } from '../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { HinhThucChanNuoiService } from '../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.service';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoSoChanNuoi, CaNhanHtx, VatNuoi, HinhThucChanNuoi, AdministrativeUnit, KyBaoCao])],
  controllers: [CoSoChanNuoiController, CaNhanHtxController, VatNuoiController, HinhThucChanNuoiController, AdministrativeUnitController, KyBaoCaoController],
  providers: [CoSoChanNuoiService, CaNhanHtxService, VatNuoiService, HinhThucChanNuoiService, AdministrativeUnitService, KyBaoCaoService]
})
export class CoSoChanNuoiModule { }
