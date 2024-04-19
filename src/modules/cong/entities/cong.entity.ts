import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum LOAIKICHTHUOC{
    LON = 'Lớn',
    VUA = 'Vừa',
    NHO = 'Nhỏ',
}

export enum LOAIHINH{
    TUOI = 'Tưới',
    TIEU = 'Tiêu',
    CAHAI = 'Tưới tiêu kết hợp',
}

@Entity({ name: 'Cong' })
export class Cong extends BaseEntityCustom{
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten', length: '255' })
    ten: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'kich_co', length: '255' })
    kichCo: string;

    @ApiProperty()
    @Column({ type: 'enum', name: 'loai_kich_thuoc', enum: LOAIKICHTHUOC, default: LOAIKICHTHUOC.NHO })
    loaiKichThuoc: LOAIKICHTHUOC;

    @ApiProperty()
    @Column({ type: 'enum', name: 'loai_hinh', enum: LOAIHINH, default: LOAIHINH.CAHAI })
    loaiHinh: LOAIHINH;
    
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

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.congs)
    administrativeUnit: AdministrativeUnit
}
