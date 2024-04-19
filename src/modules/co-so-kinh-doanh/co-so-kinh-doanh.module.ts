import { Module } from '@nestjs/common';
import { CoSoKinhDoanhService } from './co-so-kinh-doanh.service';
import { CoSoKinhDoanhController } from './co-so-kinh-doanh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoSoKinhDoanh } from './entities/co-so-kinh-doanh.entity';
import { CaNhanHtx } from '../ca-nhan-htx/entities/ca-nhan-htx.entity';
import { LoaiKinhDoanh } from '../loai-kinh-doanh/entities/loai-kinh-doanh.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { CaNhanHtxController } from '../ca-nhan-htx/ca-nhan-htx.controller';
import { LoaiKinhDoanhController } from '../loai-kinh-doanh/loai-kinh-doanh.controller';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { LoaiKinhDoanhService } from '../loai-kinh-doanh/loai-kinh-doanh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoSoKinhDoanh, CaNhanHtx, LoaiKinhDoanh, AdministrativeUnit])],
  controllers: [CoSoKinhDoanhController, CaNhanHtxController, LoaiKinhDoanhController, AdministrativeUnitController],
  providers: [CoSoKinhDoanhService, CaNhanHtxService, LoaiKinhDoanhService, AdministrativeUnitService]
})
export class CoSoKinhDoanhModule { }
