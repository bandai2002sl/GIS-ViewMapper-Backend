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
import { SanXuatVatNuoiService } from './san-xuat-vat-nuoi.service';
import { CreateSanXuatVatNuoiDto } from './dto/create-san-xuat-vat-nuoi.dto';
import { UpdateSanXuatVatNuoiDto } from './dto/update-san-xuat-vat-nuoi.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Sản Xuất Vật Nuôi')
@ApiBearerAuth()
@Controller('san-xuat-vat-nuoi')
// @UseGuards(AdminAuthGuard)
export class SanXuatVatNuoiController {
  constructor(private readonly sanXuatVatNuoiService: SanXuatVatNuoiService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.San_xuat_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createSanXuatVatNuoiDto: CreateSanXuatVatNuoiDto) {
    return this.sanXuatVatNuoiService.create(createSanXuatVatNuoiDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.San_xuat_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.sanXuatVatNuoiService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.sanXuatVatNuoiService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.San_xuat_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateSanXuatVatNuoiDto: UpdateSanXuatVatNuoiDto,
  ) {
    return this.sanXuatVatNuoiService.update(+id, updateSanXuatVatNuoiDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.San_xuat_vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteSanXuatVN(@Param('id') id: string) {
    return this.sanXuatVatNuoiService.deleteSanXuatVN(+id);
  }
}
