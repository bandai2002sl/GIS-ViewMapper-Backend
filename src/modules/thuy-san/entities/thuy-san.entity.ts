import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { SanXuatThuySan } from "src/modules/san-xuat-thuy-san/entities/san-xuat-thuy-san.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'ThuySan'})
export class ThuySan extends BaseEntityCustom{
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'thuy_san', length: "255" })
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

    @OneToMany(() => SanXuatThuySan, (sanXuatThuySan) => sanXuatThuySan.thuySan)
    sanXuatThuySans: SanXuatThuySan[]
}
