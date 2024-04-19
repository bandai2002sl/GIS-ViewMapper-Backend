import { PartialType } from '@nestjs/swagger';
import { CreateCoSoKinhDoanhDto } from './create-co-so-kinh-doanh.dto';

export class UpdateCoSoKinhDoanhDto extends PartialType(CreateCoSoKinhDoanhDto) {}
