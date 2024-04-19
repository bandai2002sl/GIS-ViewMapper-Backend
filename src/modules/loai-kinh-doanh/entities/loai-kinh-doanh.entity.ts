import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { CoSoKinhDoanh } from "src/modules/co-so-kinh-doanh/entities/co-so-kinh-doanh.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'LoaiKinhDoanh' })
export class LoaiKinhDoanh extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'loai_kinh_doanh', length: '255' })
    loaiKinhDoanh: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tam_ngung', length: '255' })
    tamNgung: string

    @OneToMany(() => CoSoKinhDoanh, (coSoKinhDoanh) => coSoKinhDoanh.loaiKinhDoanh)
    coSoKinhDoanhs: CoSoKinhDoanh[]
}
