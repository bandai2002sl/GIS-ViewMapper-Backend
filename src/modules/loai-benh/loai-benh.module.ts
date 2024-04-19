import { Module } from '@nestjs/common';
import { LoaiBenhService } from './loai-benh.service';
import { LoaiBenhController } from './loai-benh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoaiBenh } from './entities/loai-benh.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoaiBenh])],
  controllers: [LoaiBenhController],
  providers: [LoaiBenhService]
})
export class LoaiBenhModule { }
