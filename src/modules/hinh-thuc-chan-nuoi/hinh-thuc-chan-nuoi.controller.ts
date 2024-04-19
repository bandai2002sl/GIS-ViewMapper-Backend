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
import { HinhThucChanNuoiService } from './hinh-thuc-chan-nuoi.service';
import { CreateHinhThucChanNuoiDto } from './dto/create-hinh-thuc-chan-nuoi.dto';
import { UpdateHinhThucChanNuoiDto } from './dto/update-hinh-thuc-chan-nuoi.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Hình Thức Chăn Nuôi')
@ApiBearerAuth()
@Controller('hinh-thuc-chan-nuoi')
// @UseGuards(AdminAuthGuard)
export class HinhThucChanNuoiController {
  constructor(
    private readonly hinhThucChanNuoiService: HinhThucChanNuoiService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createHinhThucChanNuoiDto: CreateHinhThucChanNuoiDto) {
    return this.hinhThucChanNuoiService.create(createHinhThucChanNuoiDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.hinhThucChanNuoiService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.hinhThucChanNuoiService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateHinhThucChanNuoiDto: UpdateHinhThucChanNuoiDto,
  ) {
    return this.hinhThucChanNuoiService.update(+id, updateHinhThucChanNuoiDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Hinh_thuc_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteHinhThucCN(@Param('id') id: string) {
    return this.hinhThucChanNuoiService.deleteHinhThucCN(+id);
  }
}
