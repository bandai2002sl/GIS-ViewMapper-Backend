import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { LoaiKinhDoanh } from "src/modules/loai-kinh-doanh/entities/loai-kinh-doanh.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'CoSoKinhDoanh' })
export class CoSoKinhDoanh extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_diem', length: '255' })
    diaDiem: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'hinh_anh', length: '255' })
    hinhAnh: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dang_ky_kinh_doanh', length: '255' })
    dangKyKinhDoanh: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'so_dien_thoai', length: 20 })
    sdt: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'trang_thai', length: '255' })
    trangThai: string

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

    @ManyToOne(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.coSoKinhDoanhs, {
        onDelete: 'CASCADE',
    })
    caNhanHtx: CaNhanHtx

    @ManyToOne(() => LoaiKinhDoanh, (loaiKinhDoanh) => loaiKinhDoanh.coSoKinhDoanhs, {
        onDelete: 'CASCADE',
    })
    loaiKinhDoanh: LoaiKinhDoanh

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.coSoKinhDoanhs, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit
}
