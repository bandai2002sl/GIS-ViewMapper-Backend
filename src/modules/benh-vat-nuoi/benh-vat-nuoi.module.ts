import { Module } from '@nestjs/common';
import { BenhVatNuoiService } from './benh-vat-nuoi.service';
import { BenhVatNuoiController } from './benh-vat-nuoi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenhVatNuoi } from './entities/benh-vat-nuoi.entity';
import { VatNuoi } from '../vat-nuoi/entities/vat-nuoi.entity';
import { LoaiBenh } from '../loai-benh/entities/loai-benh.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { VatNuoiController } from '../vat-nuoi/vat-nuoi.controller';
import { LoaiBenhController } from '../loai-benh/loai-benh.controller';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { LoaiBenhService } from '../loai-benh/loai-benh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([BenhVatNuoi, VatNuoi, LoaiBenh, AdministrativeUnit, KyBaoCao])],
  controllers: [BenhVatNuoiController, VatNuoiController, LoaiBenhController, AdministrativeUnitController, KyBaoCaoController],
  providers: [BenhVatNuoiService, VatNuoiService, LoaiBenhService, AdministrativeUnitService, KyBaoCaoService]
})
export class BenhVatNuoiModule { }
