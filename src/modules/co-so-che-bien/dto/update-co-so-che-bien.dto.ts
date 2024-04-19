import { PartialType } from '@nestjs/swagger';
import { CreateCoSoCheBienDto } from './create-co-so-che-bien.dto';

export class UpdateCoSoCheBienDto extends PartialType(CreateCoSoCheBienDto) {}
