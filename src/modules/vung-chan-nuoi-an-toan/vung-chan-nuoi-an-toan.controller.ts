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
import { VungChanNuoiAnToanService } from './vung-chan-nuoi-an-toan.service';
import { CreateVungChanNuoiAnToanDto } from './dto/create-vung-chan-nuoi-an-toan.dto';
import { UpdateVungChanNuoiAnToanDto } from './dto/update-vung-chan-nuoi-an-toan.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Vùng Chăn Nuôi An Toàn')
@ApiBearerAuth()
@Controller('vung-chan-nuoi-an-toan')
// @UseGuards(AdminAuthGuard)
export class VungChanNuoiAnToanController {
  constructor(
    private readonly vungChanNuoiAnToanService: VungChanNuoiAnToanService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Vung_chan_nuoi_an_toan)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createVungChanNuoiAnToanDto: CreateVungChanNuoiAnToanDto) {
    return this.vungChanNuoiAnToanService.create(createVungChanNuoiAnToanDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Vung_chan_nuoi_an_toan)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.vungChanNuoiAnToanService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.vungChanNuoiAnToanService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Vung_chan_nuoi_an_toan)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateVungChanNuoiAnToanDto: UpdateVungChanNuoiAnToanDto,
  ) {
    return this.vungChanNuoiAnToanService.update(
      +id,
      updateVungChanNuoiAnToanDto,
    );
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Vung_chan_nuoi_an_toan)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteVungAnToan(@Param('id') id: string) {
    return this.vungChanNuoiAnToanService.deleteVungAnToan(+id);
  }
}
