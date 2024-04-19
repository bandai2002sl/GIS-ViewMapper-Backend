import { PartialType } from '@nestjs/swagger';
import { CreateCoSoChanNuoiDto } from './create-co-so-chan-nuoi.dto';

export class UpdateCoSoChanNuoiDto extends PartialType(CreateCoSoChanNuoiDto) {}
