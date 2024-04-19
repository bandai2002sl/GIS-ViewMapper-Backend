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
import { AdministrativeUnitService } from './administrative-unit.service';
import { CreateAdministrativeUnitDto } from './dto/create-administrative-unit.dto';
import { UpdateAdministrativeUnitDto } from './dto/update-administrative-unit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Đơn Vị Hành Chính')
@ApiBearerAuth()
@Controller('administrative-unit')
// @UseGuards(AdminAuthGuard)
export class AdministrativeUnitController {
  constructor(
    private readonly administrativeUnitService: AdministrativeUnitService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createAdministrativeUnitDto: CreateAdministrativeUnitDto) {
    return this.administrativeUnitService.create(createAdministrativeUnitDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  getAll() {
    return this.administrativeUnitService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.administrativeUnitService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  updateAdmin(
    @Param('id') id: string,
    @Body() updateAdministrativeUnitDto: UpdateAdministrativeUnitDto,
  ) {
    return this.administrativeUnitService.updateAdmin(
      +id,
      updateAdministrativeUnitDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Don_vi_hanh_chinh)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteAdmin(@Param('id') id: string) {
    return this.administrativeUnitService.deleteAdmin(+id);
  }
}
