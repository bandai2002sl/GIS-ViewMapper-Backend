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
import { CongService } from './cong.service';
import { CreateCongDto } from './dto/create-cong.dto';
import { UpdateCongDto } from './dto/update-cong.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Cống')
@ApiBearerAuth()
@Controller('cong')
// @UseGuards(AdminAuthGuard)
export class CongController {
  constructor(private readonly congService: CongService) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Cong)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createCongDto: CreateCongDto) {
    return this.congService.create(createCongDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Cong)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.congService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.congService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Cong)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateCongDto: UpdateCongDto) {
    return this.congService.update(+id, updateCongDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Cong)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.congService.remove(+id);
  }
}
