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
import { LoaiKinhDoanhService } from './loai-kinh-doanh.service';
import { CreateLoaiKinhDoanhDto } from './dto/create-loai-kinh-doanh.dto';
import { UpdateLoaiKinhDoanhDto } from './dto/update-loai-kinh-doanh.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Loai Kinh Doanh')
@ApiBearerAuth()
@Controller('loai-kinh-doanh')
// @UseGuards(AdminAuthGuard)
export class LoaiKinhDoanhController {
  constructor(private readonly loaiKinhDoanhService: LoaiKinhDoanhService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Loai_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createLoaiKinhDoanhDto: CreateLoaiKinhDoanhDto) {
    return this.loaiKinhDoanhService.create(createLoaiKinhDoanhDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Loai_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.loaiKinhDoanhService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.loaiKinhDoanhService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Loai_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateLoaiKinhDoanhDto: UpdateLoaiKinhDoanhDto,
  ) {
    return this.loaiKinhDoanhService.update(+id, updateLoaiKinhDoanhDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Loai_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteLoaiKD(@Param('id') id: string) {
    return this.loaiKinhDoanhService.deleteLoaiKD(+id);
  }
}
