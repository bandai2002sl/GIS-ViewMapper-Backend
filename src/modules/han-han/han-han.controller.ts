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
import { HanHanService } from './han-han.service';
import { CreateHanHanDto } from './dto/create-han-han.dto';
import { UpdateHanHanDto } from './dto/update-han-han.dto';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Hạn Hán')
@ApiBearerAuth()
@Controller('han-han')
// @UseGuards(AdminAuthGuard)
export class HanHanController {
  constructor(private readonly hanHanService: HanHanService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Han_han)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createHanHanDto: CreateHanHanDto) {
    return this.hanHanService.create(createHanHanDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Han_han)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.hanHanService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.hanHanService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Han_han)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(@Param('id') id: string, @Body() updateHanHanDto: UpdateHanHanDto) {
    return this.hanHanService.update(+id, updateHanHanDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Han_han)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteHanHan(@Param('id') id: string) {
    return this.hanHanService.deleteHanHan(+id);
  }
}
