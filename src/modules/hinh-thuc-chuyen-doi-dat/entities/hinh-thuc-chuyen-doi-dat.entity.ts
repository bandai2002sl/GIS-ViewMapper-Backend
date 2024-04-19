import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { ChuyenDoiSuDungDat } from "src/modules/chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'HinhThucChuyenDoiDat' })
export class HinhThucChuyenDoiDat extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten_hinh_thuc', length: '255' })
    tenHinhThuc: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tam_ngung', length: "255" })
    tamNgung: string;

    @OneToMany(() => ChuyenDoiSuDungDat, (chuyenDoiSuDungDat) => chuyenDoiSuDungDat.hinhThucChuyenDoiDat)
    chuyenDoiSuDungDats: ChuyenDoiSuDungDat[]
}
