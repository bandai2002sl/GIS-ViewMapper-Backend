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
import { CoSoChanNuoiService } from './co-so-chan-nuoi.service';
import { CreateCoSoChanNuoiDto } from './dto/create-co-so-chan-nuoi.dto';
import { UpdateCoSoChanNuoiDto } from './dto/update-co-so-chan-nuoi.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Cơ Sở Chăn Nuôi')
@ApiBearerAuth()
@Controller('co-so-chan-nuoi')
// @UseGuards(AdminAuthGuard)
export class CoSoChanNuoiController {
  constructor(private readonly coSoChanNuoiService: CoSoChanNuoiService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Co_so_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createCoSoChanNuoiDto: CreateCoSoChanNuoiDto) {
    return this.coSoChanNuoiService.create(createCoSoChanNuoiDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Co_so_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.coSoChanNuoiService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.coSoChanNuoiService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Co_so_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateCoSoChanNuoiDto: UpdateCoSoChanNuoiDto,
  ) {
    return this.coSoChanNuoiService.update(+id, updateCoSoChanNuoiDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Co_so_chan_nuoi)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteCoSoCN(@Param('id') id: string) {
    return this.coSoChanNuoiService.deleteCoSoCN(+id);
  }
}
