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
import { TauCaService } from './tau-ca.service';
import { CreateTauCaDto } from './dto/create-tau-ca.dto';
import { UpdateTauCaDto } from './dto/update-tau-ca.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Quản lý tàu cá')
@ApiBearerAuth()
@Controller('tau-ca')
// @UseGuards(AdminAuthGuard)
export class TauCaController {
  constructor(private readonly tauCaService: TauCaService) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Tau_ca)
  @SetMetadata('permisssionKey', PermissionKey.Them)
  create(@Body() createTauCaDto: CreateTauCaDto) {
    return this.tauCaService.create(createTauCaDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Tau_ca)
  @SetMetadata('permisssionKey', PermissionKey.Xem)
  findAll() {
    return this.tauCaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tauCaService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Tau_ca)
  @SetMetadata('permisssionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateTauCaDto: UpdateTauCaDto) {
    return this.tauCaService.update(+id, updateTauCaDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Tau_ca)
  @SetMetadata('permisssionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.tauCaService.remove(+id);
  }
}
