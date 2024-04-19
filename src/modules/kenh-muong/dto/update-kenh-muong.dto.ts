import { PartialType } from '@nestjs/swagger';
import { CreateKenhMuongDto } from './create-kenh-muong.dto';

export class UpdateKenhMuongDto extends PartialType(CreateKenhMuongDto) {}
