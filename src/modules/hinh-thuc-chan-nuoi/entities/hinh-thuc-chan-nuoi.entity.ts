import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { CoSoChanNuoi } from "src/modules/co-so-chan-nuoi/entities/co-so-chan-nuoi.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'HinhThucChanNuoi' })
export class HinhThucChanNuoi extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten_hinh_thuc', length: '255' })
    tenHinhThuc: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tam_ngung', length: '255' })
    tamNgung: string

    @OneToMany(() => CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.hinhThucChanNuoi)
    coSoChanNuois: CoSoChanNuoi[]
}
