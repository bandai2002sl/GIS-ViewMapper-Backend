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
import { DuongDonViHanhChinhService } from './duong-don-vi-hanh-chinh.service';
import { CreateDuongDonViHanhChinhDto } from './dto/create-duong-don-vi-hanh-chinh.dto';
import { UpdateDuongDonViHanhChinhDto } from './dto/update-duong-don-vi-hanh-chinh.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Đường Đơn Vị Hành Chính')
@ApiBearerAuth()
@Controller('duong-don-vi-hanh-chinh')
// @UseGuards(AdminAuthGuard)
export class DuongDonViHanhChinhController {
  constructor(
    private readonly duongDonViHanhChinhService: DuongDonViHanhChinhService,
  ) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Duong_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createDuongDonViHanhChinhDto: CreateDuongDonViHanhChinhDto) {
    return this.duongDonViHanhChinhService.create(createDuongDonViHanhChinhDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Duong_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.duongDonViHanhChinhService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.duongDonViHanhChinhService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Duong_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateDuongDonViHanhChinhDto: UpdateDuongDonViHanhChinhDto,
  ) {
    return this.duongDonViHanhChinhService.update(
      +id,
      updateDuongDonViHanhChinhDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Duong_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteDuongHC(@Param('id') id: string) {
    return this.duongDonViHanhChinhService.deleteDuongHC(+id);
  }
}
