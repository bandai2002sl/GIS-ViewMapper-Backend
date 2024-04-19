import { Module } from '@nestjs/common';
import { DienTichTuoiTieuService } from './dien-tich-tuoi-tieu.service';
import { DienTichTuoiTieuController } from './dien-tich-tuoi-tieu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DienTichTuoiTieu } from './entities/dien-tich-tuoi-tieu.entity';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CropType } from '../crop-type/entities/crop-type.entity';
import { CropTypeController } from '../crop-type/crop-type.controller';
import { CropTypeService } from '../crop-type/crop-type.service';

@Module({
  imports:[TypeOrmModule.forFeature([
    DienTichTuoiTieu,
    AdministrativeUnit,
    CropType
  ])],
  controllers: [
    DienTichTuoiTieuController,
    AdministrativeUnitController,
    CropTypeController
  ],
  providers: [
    DienTichTuoiTieuService,
    AdministrativeUnitService,
    CropTypeService
  ]
})
export class DienTichTuoiTieuModule {}
