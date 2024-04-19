import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { ThuySan } from "src/modules/thuy-san/entities/thuy-san.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'SanXuatThuySan' })
export class SanXuatThuySan extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'hinh_anh', length: '255' })
    hinhAnh: string

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tinh_trang', length: '255' })
    tinhTrang: string

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

    @ManyToOne(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.sanXuatThuySans, {
        onDelete: 'CASCADE',
    })
    caNhanHtx: CaNhanHtx

    @ManyToOne(() => ThuySan, (thuySan) => thuySan.sanXuatThuySans, {
        onDelete: 'CASCADE',
    })
    thuySan: ThuySan

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.sanXuatThuySans, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
