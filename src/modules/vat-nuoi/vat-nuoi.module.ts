import { Module } from '@nestjs/common';
import { VatNuoiService } from './vat-nuoi.service';
import { VatNuoiController } from './vat-nuoi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VatNuoi } from './entities/vat-nuoi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VatNuoi])],
  controllers: [VatNuoiController],
  providers: [VatNuoiService]
})
export class VatNuoiModule { }
