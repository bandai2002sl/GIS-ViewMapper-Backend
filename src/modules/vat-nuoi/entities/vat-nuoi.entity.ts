import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { BenhVatNuoi } from "src/modules/benh-vat-nuoi/entities/benh-vat-nuoi.entity";
import { CoSoChanNuoi } from "src/modules/co-so-chan-nuoi/entities/co-so-chan-nuoi.entity";
import { SanXuatVatNuoi } from "src/modules/san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity";
import { VungChanNuoiAnToan } from "src/modules/vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'VatNuoi' })
export class VatNuoi extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'vat_nuoi', length: "255" })
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

    @OneToMany(() => SanXuatVatNuoi, (sanXuatVatNuoi) => sanXuatVatNuoi.vatNuoi)
    sanXuatVatNuois: SanXuatVatNuoi[]

    @OneToMany(() => VungChanNuoiAnToan, (vungChanNuoiAnToan) => vungChanNuoiAnToan.vatNuoi)
    vungChanNuoiAnToans: VungChanNuoiAnToan[]

    @OneToMany(() => BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.vatNuoi)
    benhVatNuois: BenhVatNuoi[]

    @ManyToMany(() => CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.vatNuoi)
    @JoinTable({ name: 'CoSoChanNuoiVatNuoi' })
    coSoChanNuois: CoSoChanNuoi[];
}
