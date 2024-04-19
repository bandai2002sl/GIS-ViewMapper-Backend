import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { BenhCayService } from './benh-cay.service';
import { CreateBenhCayDto } from './dto/create-benh-cay.dto';
import { UpdateBenhCayDto } from './dto/update-benh-cay.dto';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

// @ApiTags('Bệnh Cây')
@ApiBearerAuth()
@Controller('benh-cay')
// @UseGuards(AdminAuthGuard)
export class BenhCayController {
  constructor(private readonly benhCayService: BenhCayService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Benh_cay)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createBenhCayDto: CreateBenhCayDto) {
    return this.benhCayService.create(createBenhCayDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Benh_cay)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.benhCayService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.benhCayService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Benh_cay)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateBenhCayDto: UpdateBenhCayDto) {
    return this.benhCayService.update(+id, updateBenhCayDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Benh_cay)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteBenhCay(@Param('id') id: string) {
    return this.benhCayService.deleteBenhCay(+id);
  }
}
