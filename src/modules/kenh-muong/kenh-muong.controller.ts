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
import { KenhMuongService } from './kenh-muong.service';
import { CreateKenhMuongDto } from './dto/create-kenh-muong.dto';
import { UpdateKenhMuongDto } from './dto/update-kenh-muong.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Kênh mương')
@ApiBearerAuth()
@Controller('kenh-muong')
// @UseGuards(AdminAuthGuard)
export class KenhMuongController {
  constructor(private readonly kenhMuongService: KenhMuongService) {}

  @Post()
  @SetMetadata('pageKey', PageKey.Kenh_muong)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createKenhMuongDto: CreateKenhMuongDto) {
    return this.kenhMuongService.create(createKenhMuongDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Kenh_muong)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.kenhMuongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kenhMuongService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Kenh_muong)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateKenhMuongDto: UpdateKenhMuongDto,
  ) {
    return this.kenhMuongService.update(+id, updateKenhMuongDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Kenh_muong)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.kenhMuongService.remove(+id);
  }
}
