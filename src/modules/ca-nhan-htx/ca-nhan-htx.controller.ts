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
import { CaNhanHtxService } from './ca-nhan-htx.service';
import { CreateCaNhanHtxDto } from './dto/create-ca-nhan-htx.dto';
import { UpdateCaNhanHtxDto } from './dto/update-ca-nhan-htx.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Cá Nhân HTX')
@ApiBearerAuth()
@Controller('ca-nhan-htx')
// @UseGuards(AdminAuthGuard)
export class CaNhanHtxController {
  constructor(private readonly caNhanHtxService: CaNhanHtxService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Hop_tac_xa)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createCaNhanHtxDto: CreateCaNhanHtxDto) {
    return this.caNhanHtxService.create(createCaNhanHtxDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Hop_tac_xa)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.caNhanHtxService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.caNhanHtxService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Hop_tac_xa)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateCaNhanHtxDto: UpdateCaNhanHtxDto,
  ) {
    return this.caNhanHtxService.update(+id, updateCaNhanHtxDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Hop_tac_xa)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.caNhanHtxService.deleteHtx(+id);
  }
}
