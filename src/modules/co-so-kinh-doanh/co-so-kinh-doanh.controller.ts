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
import { CoSoKinhDoanhService } from './co-so-kinh-doanh.service';
import { CreateCoSoKinhDoanhDto } from './dto/create-co-so-kinh-doanh.dto';
import { UpdateCoSoKinhDoanhDto } from './dto/update-co-so-kinh-doanh.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Cở Sở Kinh Doanh')
@ApiBearerAuth()
@Controller('co-so-kinh-doanh')
// @UseGuards(AdminAuthGuard)
export class CoSoKinhDoanhController {
  constructor(private readonly coSoKinhDoanhService: CoSoKinhDoanhService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Co_so_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createCoSoKinhDoanhDto: CreateCoSoKinhDoanhDto) {
    return this.coSoKinhDoanhService.create(createCoSoKinhDoanhDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Co_so_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.coSoKinhDoanhService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.coSoKinhDoanhService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Co_so_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateCoSoKinhDoanhDto: UpdateCoSoKinhDoanhDto,
  ) {
    return this.coSoKinhDoanhService.update(+id, updateCoSoKinhDoanhDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Co_so_kinh_doanh)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteCoSoKD(@Param('id') id: string) {
    return this.coSoKinhDoanhService.deleteCoSoKD(+id);
  }
}
