import { Module } from '@nestjs/common';
import { HinhThucChuyenDoiDatService } from './hinh-thuc-chuyen-doi-dat.service';
import { HinhThucChuyenDoiDatController } from './hinh-thuc-chuyen-doi-dat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HinhThucChuyenDoiDat } from './entities/hinh-thuc-chuyen-doi-dat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HinhThucChuyenDoiDat])],
  controllers: [HinhThucChuyenDoiDatController],
  providers: [HinhThucChuyenDoiDatService]
})
export class HinhThucChuyenDoiDatModule { }
