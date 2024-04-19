import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { BenhCay } from "src/modules/benh-cay/entities/benh-cay.entity";
import { BenhVatNuoi } from "src/modules/benh-vat-nuoi/entities/benh-vat-nuoi.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum DOI_TUONG {
    CayTrong = "Cây trồng",
    VatNuoi = "Vật nuôi",
}

@Entity({ name: 'LoaiBenh' })
export class LoaiBenh extends BaseEntityCustom {

    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten_benh', length: '255' })
    tenBenh: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string;

    @ApiProperty()
    @Column({ type: 'enum', name: 'doi_tuong', enum: DOI_TUONG, default: DOI_TUONG.CayTrong })
    doiTuong: DOI_TUONG;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'hinh_anh', length: '255' })
    hinhAnh: string;

    @ApiProperty()
    @Column({ type: 'varchar', length: '200', name: 'icon' })
    icon: string;

    @OneToMany(() => BenhCay, (benhCay) => benhCay.loaiBenh)
    benhCays: BenhCay[]

    @OneToMany(() => BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.loaiBenh)
    benhVatNuois: BenhVatNuoi[]
}
