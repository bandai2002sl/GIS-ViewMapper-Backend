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
import { BenhVatNuoiService } from './benh-vat-nuoi.service';
import { CreateBenhVatNuoiDto } from './dto/create-benh-vat-nuoi.dto';
import { UpdateBenhVatNuoiDto } from './dto/update-benh-vat-nuoi.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Bệnh Vật Nuôi')
@ApiBearerAuth()
@Controller('benh-vat-nuoi')
// @UseGuards(AdminAuthGuard)
export class BenhVatNuoiController {
  constructor(private readonly benhVatNuoiService: BenhVatNuoiService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Benh_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createBenhVatNuoiDto: CreateBenhVatNuoiDto) {
    return this.benhVatNuoiService.create(createBenhVatNuoiDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Benh_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.benhVatNuoiService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.benhVatNuoiService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Benh_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateBenhVatNuoiDto: UpdateBenhVatNuoiDto,
  ) {
    return this.benhVatNuoiService.update(+id, updateBenhVatNuoiDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Benh_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteBenhVatNuoi(@Param('id') id: string) {
    return this.benhVatNuoiService.deleteBenhVatNuoi(+id);
  }
}
