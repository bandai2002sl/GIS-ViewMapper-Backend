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
import { HoChuaService } from './ho-chua.service';
import { CreateHoChuaDto } from './dto/create-ho-chua.dto';
import { UpdateHoChuaDto } from './dto/update-ho-chua.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Hồ chứa')
@ApiBearerAuth()
@Controller('ho-chua')
// @UseGuards(AdminAuthGuard)
export class HoChuaController {
  constructor(private readonly hoChuaService: HoChuaService) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Ho_chua)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createHoChuaDto: CreateHoChuaDto) {
    return this.hoChuaService.create(createHoChuaDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Ho_chua)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.hoChuaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hoChuaService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Ho_chua)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateHoChuaDto: UpdateHoChuaDto) {
    return this.hoChuaService.update(+id, updateHoChuaDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Ho_chua)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.hoChuaService.remove(+id);
  }
}
