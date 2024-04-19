import { Module } from '@nestjs/common';
import { CropTypeService } from './crop-type.service';
import { CropTypeController } from './crop-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropType } from './entities/crop-type.entity';
import { SanXuatTrongTrotService } from '../san-xuat-trong-trot/san-xuat-trong-trot.service';
import { SanXuatTrongTrot } from '../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity';
import { SanXuatTrongTrotController } from '../san-xuat-trong-trot/san-xuat-trong-trot.controller';
import { AdministrativeUnit } from '../administrative-unit/entities/administrative-unit.entity';
import { AdministrativeUnitController } from '../administrative-unit/administrative-unit.controller';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([CropType, SanXuatTrongTrot, AdministrativeUnit])],
  controllers: [CropTypeController, SanXuatTrongTrotController, AdministrativeUnitController],
  providers: [CropTypeService, SanXuatTrongTrotService, AdministrativeUnitService]
})
export class CropTypeModule { }
