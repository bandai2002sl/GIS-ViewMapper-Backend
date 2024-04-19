import { PartialType } from '@nestjs/swagger';
import { CreateLoaiBenhDto } from './create-loai-benh.dto';

export class UpdateLoaiBenhDto extends PartialType(CreateLoaiBenhDto) {}
