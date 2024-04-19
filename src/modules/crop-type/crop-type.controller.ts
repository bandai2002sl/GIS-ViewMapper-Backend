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
import { CropTypeService } from './crop-type.service';
import { CreateCropTypeDto } from './dto/create-crop-type.dto';
import { UpdateCropTypeDto } from './dto/update-crop-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminAuthGuard } from '../auth/jwt.strategy';
import { PageKey, PermissionKey } from 'src/common/shared';

@ApiTags('Loại cây trồng')
@ApiBearerAuth()
@Controller('crop-type')
// @UseGuards(AdminAuthGuard)
export class CropTypeController {
  constructor(private readonly cropTypeService: CropTypeService) {}

  @Post('')
  @SetMetadata('pageKey', PageKey.Cay_trong)
  @SetMetadata('permissionKey', PermissionKey.Them)
  create(@Body() createCropTypeDto: CreateCropTypeDto) {
    return this.cropTypeService.create(createCropTypeDto);
  }

  @Get()
  @SetMetadata('pageKey', PageKey.Cay_trong)
  @SetMetadata('permissionKey', PermissionKey.Xem)
  getAll() {
    return this.cropTypeService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.cropTypeService.getOne(+id);
  }

  @Put(':id')
  @SetMetadata('pageKey', PageKey.Cay_trong)
  @SetMetadata('permissionKey', PermissionKey.Sua)
  editCrop(
    @Param('id') id: number,
    @Body() updateCropTypeDto: UpdateCropTypeDto,
  ) {
    return this.cropTypeService.editCrop(+id, updateCropTypeDto);
  }

  @Delete(':id')
  @SetMetadata('pageKey', PageKey.Cay_trong)
  @SetMetadata('permissionKey', PermissionKey.Xoa)
  deleteCrop(@Param('id') id: number) {
    return this.cropTypeService.deleteCrop(+id);
  }
}
