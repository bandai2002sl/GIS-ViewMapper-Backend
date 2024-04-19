import { ApiProperty } from "@nestjs/swagger";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'TauCa' })
export class TauCa {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'int', name: 'so_dang_ky'})
    soDangKy: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_dang_ky'})
    ngayDangKy: Date;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tinh_trang', length: '255',nullable:true})
    tinhTrang: string;

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

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.tauCas)
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => CaNhanHtx, (caNhanHTX) => caNhanHTX.tauCas)
    caNhanHTX: CaNhanHtx
}
