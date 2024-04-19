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
import { SanXuatTrongTrotService } from './san-xuat-trong-trot.service';
import { CreateSanXuatTrongTrotDto } from './dto/create-san-xuat-trong-trot.dto';
import { UpdateSanXuatTrongTrotDto } from './dto/update-san-xuat-trong-trot.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Sản xuất trồng trọt')
@ApiBearerAuth()
@Controller('san-xuat-trong-trot')
// @UseGuards(AdminAuthGuard)
export class SanXuatTrongTrotController {
  constructor(
    private readonly sanXuatTrongTrotService: SanXuatTrongTrotService,
  ) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.San_xuat_trong_trot)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createSanXuatTrongTrotDto: CreateSanXuatTrongTrotDto) {
    return this.sanXuatTrongTrotService.create(createSanXuatTrongTrotDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.San_xuat_trong_trot)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.sanXuatTrongTrotService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.sanXuatTrongTrotService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.San_xuat_trong_trot)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: number,
    @Body() updateSanXuatTrongTrotDto: UpdateSanXuatTrongTrotDto,
  ) {
    return this.sanXuatTrongTrotService.update(+id, updateSanXuatTrongTrotDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.San_xuat_trong_trot)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteSanXuatTT(@Param('id') id: number) {
    return this.sanXuatTrongTrotService.deleteSanXuatTT(+id);
  }
}
