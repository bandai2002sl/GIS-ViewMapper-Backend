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
import { VatNuoiService } from './vat-nuoi.service';
import { CreateVatNuoiDto } from './dto/create-vat-nuoi.dto';
import { UpdateVatNuoiDto } from './dto/update-vat-nuoi.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Vật Nuôi')
@ApiBearerAuth()
@Controller('vat-nuoi')
// @UseGuards(AdminAuthGuard)
export class VatNuoiController {
  constructor(private readonly vatNuoiService: VatNuoiService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createVatNuoiDto: CreateVatNuoiDto) {
    return this.vatNuoiService.create(createVatNuoiDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.vatNuoiService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.vatNuoiService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateVatNuoiDto: UpdateVatNuoiDto) {
    return this.vatNuoiService.update(+id, updateVatNuoiDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Vat_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteVatNuoi(@Param('id') id: string) {
    return this.vatNuoiService.deleteVatNuoi(+id);
  }
}
