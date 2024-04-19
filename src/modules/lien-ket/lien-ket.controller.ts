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
import { LienKetService } from './lien-ket.service';
import { CreateLienKetDto } from './dto/create-lien-ket.dto';
import { UpdateLienKetDto } from './dto/update-lien-ket.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Liên Kết')
@ApiBearerAuth()
@Controller('lien-ket')
// @UseGuards(AdminAuthGuard)
export class LienKetController {
  constructor(private readonly lienKetService: LienKetService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Lien_ket)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createLienKetDto: CreateLienKetDto) {
    return this.lienKetService.create(createLienKetDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Lien_ket)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.lienKetService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.lienKetService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Lien_ket)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateLienKetDto: UpdateLienKetDto) {
    return this.lienKetService.update(+id, updateLienKetDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Lien_ket)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteLienKet(@Param('id') id: string) {
    return this.lienKetService.deleteLienKet(+id);
  }
}
