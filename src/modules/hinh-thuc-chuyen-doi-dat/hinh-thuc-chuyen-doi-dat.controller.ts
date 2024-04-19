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
import { HinhThucChuyenDoiDatService } from './hinh-thuc-chuyen-doi-dat.service';
import { CreateHinhThucChuyenDoiDatDto } from './dto/create-hinh-thuc-chuyen-doi-dat.dto';
import { UpdateHinhThucChuyenDoiDatDto } from './dto/update-hinh-thuc-chuyen-doi-dat.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Hình Thức Chuyển Đổi Đất')
@ApiBearerAuth()
@Controller('hinh-thuc-chuyen-doi-dat')
// @UseGuards(AdminAuthGuard)
export class HinhThucChuyenDoiDatController {
  constructor(
    private readonly hinhThucChuyenDoiDatService: HinhThucChuyenDoiDatService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chuyen_doi_dat)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createHinhThucChuyenDoiDatDto: CreateHinhThucChuyenDoiDatDto) {
    return this.hinhThucChuyenDoiDatService.create(
      createHinhThucChuyenDoiDatDto,
    );
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chuyen_doi_dat)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.hinhThucChuyenDoiDatService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.hinhThucChuyenDoiDatService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chuyen_doi_dat)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateHinhThucChuyenDoiDatDto: UpdateHinhThucChuyenDoiDatDto,
  ) {
    return this.hinhThucChuyenDoiDatService.update(
      +id,
      updateHinhThucChuyenDoiDatDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chuyen_doi_dat)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteHTCDDat(@Param('id') id: string) {
    return this.hinhThucChuyenDoiDatService.deleteHTCDDat(+id);
  }
}
