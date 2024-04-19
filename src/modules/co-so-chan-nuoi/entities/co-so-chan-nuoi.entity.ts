import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { HinhThucChanNuoi } from "src/modules/hinh-thuc-chan-nuoi/entities/hinh-thuc-chan-nuoi.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'CoSoChanNuoi' })
export class CoSoChanNuoi extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tinh_trang', length: '255' })
    tinhTrang: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string

    @ApiProperty()
    @Column({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    })
    toaDo: string;

    @ApiProperty()
    @Column({ type: 'varchar', length: '200', name: 'icon' })
    icon: string;

    @ManyToOne(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.coSoChanNuois, {
        onDelete: 'CASCADE',
    })
    caNhanHtx: CaNhanHtx

    @ManyToMany(() => VatNuoi, (vatNuoi) => vatNuoi.coSoChanNuois, { onDelete: 'CASCADE' })
    @JoinTable({ name: 'CoSoChanNuoiVatNuoi' })
    vatNuoi: VatNuoi[];

    @ManyToOne(() => HinhThucChanNuoi, (hinhThucChanNuoi) => hinhThucChanNuoi.coSoChanNuois, {
        onDelete: 'CASCADE',
    })
    hinhThucChanNuoi: HinhThucChanNuoi

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.coSoChanNuois, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}