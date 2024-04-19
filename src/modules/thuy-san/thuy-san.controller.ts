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
import { ThuySanService } from './thuy-san.service';
import { CreateThuySanDto } from './dto/create-thuy-san.dto';
import { UpdateThuySanDto } from './dto/update-thuy-san.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Thủy sản')
@ApiBearerAuth()
@Controller('thuy-san')
// @UseGuards(AdminAuthGuard)
export class ThuySanController {
  constructor(private readonly thuySanService: ThuySanService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createThuySanDto: CreateThuySanDto) {
    return this.thuySanService.create(createThuySanDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.thuySanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thuySanService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateThuySanDto: UpdateThuySanDto) {
    return this.thuySanService.update(+id, updateThuySanDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Thuy_san)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  remove(@Param('id') id: string) {
    return this.thuySanService.deleteThuySan(+id);
  }
}
