import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
  Put,
} from '@nestjs/common';
import { KyBaoCaoService } from './ky-bao-cao.service';
import { CreateKyBaoCaoDto } from './dto/create-ky-bao-cao.dto';
import { UpdateKyBaoCaoDto } from './dto/update-ky-bao-cao.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Kỳ báo cáo')
@ApiBearerAuth()
@Controller('ky-bao-cao')
// @UseGuards(AdminAuthGuard)
export class KyBaoCaoController {
  constructor(private readonly kyBaoCaoService: KyBaoCaoService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Ky_Bao_Cao)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createKyBaoCaoDto: CreateKyBaoCaoDto) {
    return this.kyBaoCaoService.create(createKyBaoCaoDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Ky_Bao_Cao)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  getAll() {
    return this.kyBaoCaoService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kyBaoCaoService.findOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Ky_Bao_Cao)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  editKyBaoCao(
    @Param('id') id: number,
    @Body() updateKyBaoCaoDto: UpdateKyBaoCaoDto,
  ) {
    return this.kyBaoCaoService.editKyBaoCao(+id, updateKyBaoCaoDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Ky_Bao_Cao)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteKyBaoCao(@Param('id') id: number) {
    return this.kyBaoCaoService.deleteKyBaoCao(+id);
  }
}
