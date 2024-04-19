import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntityCustom } from 'src/common/shared';
import { AdministrativeUnit } from 'src/modules/administrative-unit/entities/administrative-unit.entity';
import { SanXuatTrongTrot } from 'src/modules/san-xuat-trong-trot/entities/san-xuat-trong-trot.entity';
import { BenhCay } from 'src/modules/benh-cay/entities/benh-cay.entity';
import { HanHan } from 'src/modules/han-han/entities/han-han.entity';
import { DienTichTuoiTieu } from 'src/modules/dien-tich-tuoi-tieu/entities/dien-tich-tuoi-tieu.entity';

@Entity({ name: 'CropType' })
export class CropType extends BaseEntityCustom {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column({ type: 'nvarchar', name: 'ten', length: "255" })
  name: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', name: 'mo_ta', length: "255" })
  moTa: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', name: 'hinh_anh', length: '255' })
  image: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', name: 'tam_ngung', length: '255' })
  tamNgung: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: '200', name: 'icon' })
  icon: string;

  @OneToMany(() => SanXuatTrongTrot, (sanXuatTrongTrot) => sanXuatTrongTrot.cropType)
  sanXuatTrongTrots: SanXuatTrongTrot[]

  @OneToMany(() => BenhCay, (benhCay) => benhCay.cropType)
  benhCays: BenhCay[]

  @OneToMany(() => HanHan, (hanHan) => hanHan.cropType)
  hanHans: HanHan[]

  @OneToMany(() => DienTichTuoiTieu, (TuoiTieu) => TuoiTieu.cropType)
  sTuoiTieu: DienTichTuoiTieu[]
}
