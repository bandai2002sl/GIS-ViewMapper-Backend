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
import { VungDonViHanhChinhService } from './vung-don-vi-hanh-chinh.service';
import { CreateVungDonViHanhChinhDto } from './dto/create-vung-don-vi-hanh-chinh.dto';
import { UpdateVungDonViHanhChinhDto } from './dto/update-vung-don-vi-hanh-chinh.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Vùng Đơn Vị Hành Chính')
@ApiBearerAuth()
@Controller('vung-don-vi-hanh-chinh')
// @UseGuards(AdminAuthGuard)
export class VungDonViHanhChinhController {
  constructor(
    private readonly vungDonViHanhChinhService: VungDonViHanhChinhService,
  ) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Vung_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createVungDonViHanhChinhDto: CreateVungDonViHanhChinhDto) {
    return this.vungDonViHanhChinhService.create(createVungDonViHanhChinhDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Vung_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.vungDonViHanhChinhService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.vungDonViHanhChinhService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Vung_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateVungDonViHanhChinhDto: UpdateVungDonViHanhChinhDto,
  ) {
    return this.vungDonViHanhChinhService.update(
      +id,
      updateVungDonViHanhChinhDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Vung_don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteVungHC(@Param('id') id: string) {
    return this.vungDonViHanhChinhService.deleteVungHC(+id);
  }
}
