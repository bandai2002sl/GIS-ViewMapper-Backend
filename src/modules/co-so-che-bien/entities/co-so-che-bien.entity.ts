import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Co_Dang_Ky {
    Khong = "Không",
    Co = "Có",
}
@Entity({ name: 'CoSoCheBien' })
export class CoSoCheBien extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'loai_che_bien', length: '255' })
    loaiCheBien: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'hinh_anh', length: '255' })
    hinhAnh: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'trang_thai', length: '255' })
    trangThai: string

    @ApiProperty()
    @Column({ type: 'enum', name: 'co_dang_ky', enum: Co_Dang_Ky, default: Co_Dang_Ky.Khong })
    coDangKy: Co_Dang_Ky

    @ApiProperty()
    @Column({ type: 'nvarchar', length: '200', name: 'CoGCNATTP' })
    CoGCNATTP: string;

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

    @ManyToOne(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.coSoCheBiens, {
        onDelete: 'CASCADE',
    })
    caNhanHtx: CaNhanHtx

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.coSoCheBiens, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.coSoCheBiens, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
