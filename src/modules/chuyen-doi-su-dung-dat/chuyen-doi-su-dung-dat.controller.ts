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
import { ChuyenDoiSuDungDatService } from './chuyen-doi-su-dung-dat.service';
import { CreateChuyenDoiSuDungDatDto } from './dto/create-chuyen-doi-su-dung-dat.dto';
import { UpdateChuyenDoiSuDungDatDto } from './dto/update-chuyen-doi-su-dung-dat.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Chuyển Đổi Sử Dụng Đất')
@ApiBearerAuth()
@Controller('chuyen-doi-su-dung-dat')
// @UseGuards(AdminAuthGuard)
export class ChuyenDoiSuDungDatController {
  constructor(
    private readonly chuyenDoiSuDungDatService: ChuyenDoiSuDungDatService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Chuyen_doi_su_dung_dat)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createChuyenDoiSuDungDatDto: CreateChuyenDoiSuDungDatDto) {
    return this.chuyenDoiSuDungDatService.create(createChuyenDoiSuDungDatDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Chuyen_doi_su_dung_dat)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.chuyenDoiSuDungDatService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.chuyenDoiSuDungDatService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Chuyen_doi_su_dung_dat)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateChuyenDoiSuDungDatDto: UpdateChuyenDoiSuDungDatDto,
  ) {
    return this.chuyenDoiSuDungDatService.update(
      +id,
      updateChuyenDoiSuDungDatDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Chuyen_doi_su_dung_dat)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteChuyenDoiDat(@Param('id') id: string) {
    return this.chuyenDoiSuDungDatService.deleteChuyenDoiDat(+id);
  }
}
