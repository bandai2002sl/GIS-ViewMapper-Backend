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
import { TramBomService } from './tram-bom.service';
import { CreateTramBomDto } from './dto/create-tram-bom.dto';
import { UpdateTramBomDto } from './dto/update-tram-bom.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Trạm bơm')
@ApiBearerAuth()
@Controller('tram-bom')
// @UseGuards(AdminAuthGuard)
export class TramBomController {
  constructor(private readonly tramBomService: TramBomService) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Tram_bom)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createTramBomDto: CreateTramBomDto) {
    return this.tramBomService.create(createTramBomDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Tram_bom)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.tramBomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tramBomService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Tram_bom)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateTramBomDto: UpdateTramBomDto) {
    return this.tramBomService.update(+id, updateTramBomDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Tram_bom)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.tramBomService.remove(+id);
  }
}
