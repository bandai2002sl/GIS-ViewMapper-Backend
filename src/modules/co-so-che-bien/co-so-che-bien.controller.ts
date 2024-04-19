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
import { CoSoCheBienService } from './co-so-che-bien.service';
import { CreateCoSoCheBienDto } from './dto/create-co-so-che-bien.dto';
import { UpdateCoSoCheBienDto } from './dto/update-co-so-che-bien.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

//@ApiTags('Cơ Sở Chế Biến')
@ApiBearerAuth()
@Controller('co-so-che-bien')
// @UseGuards(AdminAuthGuard)
export class CoSoCheBienController {
  constructor(private readonly coSoCheBienService: CoSoCheBienService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Co_so_che_bien)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createCoSoCheBienDto: CreateCoSoCheBienDto) {
    return this.coSoCheBienService.create(createCoSoCheBienDto);
  }

  @Get('')
  @SetMetadata('pageKey', PageKey.Co_so_che_bien)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  findAll() {
    return this.coSoCheBienService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.coSoCheBienService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Co_so_che_bien)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  update(
    @Param('id') id: string,
    @Body() updateCoSoCheBienDto: UpdateCoSoCheBienDto,
  ) {
    return this.coSoCheBienService.update(+id, updateCoSoCheBienDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Co_so_che_bien)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteCheBien(@Param('id') id: string) {
    return this.coSoCheBienService.deleteCheBien(+id);
  }
}
