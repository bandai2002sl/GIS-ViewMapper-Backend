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
import { LoaiBenhService } from './loai-benh.service';
import { CreateLoaiBenhDto } from './dto/create-loai-benh.dto';
import { UpdateLoaiBenhDto } from './dto/update-loai-benh.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Loại Bệnh')
@ApiBearerAuth()
@Controller('loai-benh')
// @UseGuards(AdminAuthGuard)
export class LoaiBenhController {
  constructor(private readonly loaiBenhService: LoaiBenhService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Loai_benh)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createLoaiBenhDto: CreateLoaiBenhDto) {
    return this.loaiBenhService.create(createLoaiBenhDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Loai_benh)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.loaiBenhService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.loaiBenhService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Loai_benh)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  editLoaiBenh(
    @Param('id') id: string,
    @Body() updateLoaiBenhDto: UpdateLoaiBenhDto,
  ) {
    return this.loaiBenhService.editLoaiBenh(+id, updateLoaiBenhDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Loai_benh)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteLoaiBenh(@Param('id') id: string) {
    return this.loaiBenhService.deleteLoaiBenh(+id);
  }
}
