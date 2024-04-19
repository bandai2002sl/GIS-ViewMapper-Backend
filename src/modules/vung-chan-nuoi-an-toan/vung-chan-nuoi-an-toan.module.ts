import { Module } from '@nestjs/common';
import { VungChanNuoiAnToanService } from './vung-chan-nuoi-an-toan.service';
import { VungChanNuoiAnToanController } from './vung-chan-nuoi-an-toan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VungChanNuoiAnToan } from './entities/vung-chan-nuoi-an-toan.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { VatNuoi } from '../vat-nuoi/entities/vat-nuoi.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { VatNuoiController } from '../vat-nuoi/vat-nuoi.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([VungChanNuoiAnToan, AdministrativeUnit, VatNuoi, KyBaoCao])],
  controllers: [VungChanNuoiAnToanController, AdministrativeUnitController, VatNuoiController, KyBaoCaoController],
  providers: [VungChanNuoiAnToanService, AdministrativeUnitService, VatNuoiService, KyBaoCaoService]
})
export class VungChanNuoiAnToanModule { }
