import { Module } from '@nestjs/common';
import { ThuySanService } from './thuy-san.service';
import { ThuySanController } from './thuy-san.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThuySan } from './entities/thuy-san.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThuySan])],
  controllers: [ThuySanController],
  providers: [ThuySanService]
})
export class ThuySanModule {}
