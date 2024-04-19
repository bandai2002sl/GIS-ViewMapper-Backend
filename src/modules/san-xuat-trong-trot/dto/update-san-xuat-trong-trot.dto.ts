import { PartialType } from '@nestjs/swagger';
import { CreateSanXuatTrongTrotDto } from './create-san-xuat-trong-trot.dto';

export class UpdateSanXuatTrongTrotDto extends PartialType(CreateSanXuatTrongTrotDto) {}
