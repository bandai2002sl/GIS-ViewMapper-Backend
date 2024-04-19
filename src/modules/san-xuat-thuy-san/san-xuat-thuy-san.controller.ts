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
import { SanXuatThuySanService } from './san-xuat-thuy-san.service';
import { CreateSanXuatThuySanDto } from './dto/create-san-xuat-thuy-san.dto';
import { UpdateSanXuatThuySanDto } from './dto/update-san-xuat-thuy-san.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Sản Xuất Thủy Sản')
@ApiBearerAuth()
@Controller('san-xuat-thuy-san')
// @UseGuards(AdminAuthGuard)
export class SanXuatThuySanController {
  constructor(private readonly sanXuatThuySanService: SanXuatThuySanService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.San_xuat_thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createSanXuatThuySanDto: CreateSanXuatThuySanDto) {
    return this.sanXuatThuySanService.create(createSanXuatThuySanDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.San_xuat_thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.sanXuatThuySanService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.sanXuatThuySanService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.San_xuat_thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateSanXuatThuySanDto: UpdateSanXuatThuySanDto,
  ) {
    return this.sanXuatThuySanService.update(+id, updateSanXuatThuySanDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.San_xuat_thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteSanXuatVN(@Param('id') id: string) {
    return this.sanXuatThuySanService.deleteSanXuatTS(+id);
  }
}
