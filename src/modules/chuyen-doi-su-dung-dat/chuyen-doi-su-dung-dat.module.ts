import { Module } from '@nestjs/common';
import { ChuyenDoiSuDungDatService } from './chuyen-doi-su-dung-dat.service';
import { ChuyenDoiSuDungDatController } from './chuyen-doi-su-dung-dat.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuyenDoiSuDungDat } from './entities/chuyen-doi-su-dung-dat.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { HinhThucChuyenDoiDat } from '../hinh-thuc-chuyen-doi-dat/entities/hinh-thuc-chuyen-doi-dat.entity';
import { HinhThucChuyenDoiDatController } from '../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.controller';
import { HinhThucChuyenDoiDatService } from '../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.service';
import { KyBaoCao } from '../ky-bao-cao/entities/ky-bao-cao.entity';
import { KyBaoCaoController } from '../ky-bao-cao/ky-bao-cao.controller';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChuyenDoiSuDungDat, AdministrativeUnit, HinhThucChuyenDoiDat, KyBaoCao])],
  controllers: [ChuyenDoiSuDungDatController, AdministrativeUnitController, HinhThucChuyenDoiDatController, KyBaoCaoController],
  providers: [ChuyenDoiSuDungDatService, AdministrativeUnitService, HinhThucChuyenDoiDatService, KyBaoCaoService]
})
export class ChuyenDoiSuDungDatModule { }
