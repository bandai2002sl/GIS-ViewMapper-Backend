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
import { DienTichTuoiTieuService } from './dien-tich-tuoi-tieu.service';
import { CreateDienTichTuoiTieuDto } from './dto/create-dien-tich-tuoi-tieu.dto';
import { UpdateDienTichTuoiTieuDto } from './dto/update-dien-tich-tuoi-tieu.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Diện tích tưới tiêu')
@ApiBearerAuth()
@Controller('dien-tich-tuoi-tieu')
// @UseGuards(AdminAuthGuard)
export class DienTichTuoiTieuController {
  constructor(
    private readonly dienTichTuoiTieuService: DienTichTuoiTieuService,
  ) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Dien_tich_tuoi_tieu)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createDienTichTuoiTieuDto: CreateDienTichTuoiTieuDto) {
    return this.dienTichTuoiTieuService.create(createDienTichTuoiTieuDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Dien_tich_tuoi_tieu)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.dienTichTuoiTieuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dienTichTuoiTieuService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Dien_tich_tuoi_tieu)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateDienTichTuoiTieuDto: UpdateDienTichTuoiTieuDto,
  ) {
    return this.dienTichTuoiTieuService.update(+id, updateDienTichTuoiTieuDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Dien_tich_tuoi_tieu)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.dienTichTuoiTieuService.remove(+id);
  }
}
