import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  SetMetadata,
} from '@nestjs/common';
import { MoHinhCongNgheCaoService } from './mo-hinh-cong-nghe-cao.service';
import { CreateMoHinhCongNgheCaoDto } from './dto/create-mo-hinh-cong-nghe-cao.dto';
import { UpdateMoHinhCongNgheCaoDto } from './dto/update-mo-hinh-cong-nghe-cao.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Mô Hinh Công Nghệ Cao')
@ApiBearerAuth()
@Controller('mo-hinh-cong-nghe-cao')
// @UseGuards(AdminAuthGuard)
export class MoHinhCongNgheCaoController {
  constructor(
    private readonly moHinhCongNgheCaoService: MoHinhCongNgheCaoService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Mo_hinh_cong_nghe_cao)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createMoHinhCongNgheCaoDto: CreateMoHinhCongNgheCaoDto) {
    return this.moHinhCongNgheCaoService.create(createMoHinhCongNgheCaoDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Mo_hinh_cong_nghe_cao)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.moHinhCongNgheCaoService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.moHinhCongNgheCaoService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Mo_hinh_cong_nghe_cao)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateMoHinhCongNgheCaoDto: UpdateMoHinhCongNgheCaoDto,
  ) {
    return this.moHinhCongNgheCaoService.update(
      +id,
      updateMoHinhCongNgheCaoDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Mo_hinh_cong_nghe_cao)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteMoHinhCNC(@Param('id') id: string) {
    return this.moHinhCongNgheCaoService.deleteMoHinhCNC(+id);
  }
}
