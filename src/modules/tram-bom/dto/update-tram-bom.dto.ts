import { PartialType } from '@nestjs/swagger';
import { CreateTramBomDto } from './create-tram-bom.dto';

export class UpdateTramBomDto extends PartialType(CreateTramBomDto) {}
