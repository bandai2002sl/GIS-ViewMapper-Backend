import { Module } from '@nestjs/common';
import { LoaiKinhDoanhService } from './loai-kinh-doanh.service';
import { LoaiKinhDoanhController } from './loai-kinh-doanh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoaiKinhDoanh } from './entities/loai-kinh-doanh.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoaiKinhDoanh])],
  controllers: [LoaiKinhDoanhController],
  providers: [LoaiKinhDoanhService]
})
export class LoaiKinhDoanhModule { }
