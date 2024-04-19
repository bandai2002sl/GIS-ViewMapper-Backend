import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { BaseEntityCustom } from 'src/common/shared';

@Entity({ name: 'Files' })
export class UploadEntity extends BaseEntityCustom {
  @ApiProperty({ description: 'id ' })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({ description: 'typeFile ' })
  @Column({ type: 'tinyint', name: 'kieu_tep', default: 0 })
  typeFile: number;

  @ApiProperty()
  @Column({
    type: 'text',
    name: 'duong_dan',
  })
  path: string;
}
