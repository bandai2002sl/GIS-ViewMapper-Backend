import { PartialType } from '@nestjs/swagger';
import { CreateTauCaDto } from './create-tau-ca.dto';

export class UpdateTauCaDto extends PartialType(CreateTauCaDto) {}
