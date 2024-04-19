import { Module } from '@nestjs/common';
import { HinhThucChanNuoiService } from './hinh-thuc-chan-nuoi.service';
import { HinhThucChanNuoiController } from './hinh-thuc-chan-nuoi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HinhThucChanNuoi } from './entities/hinh-thuc-chan-nuoi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HinhThucChanNuoi])],
  controllers: [HinhThucChanNuoiController],
  providers: [HinhThucChanNuoiService]
})
export class HinhThucChanNuoiModule { }
