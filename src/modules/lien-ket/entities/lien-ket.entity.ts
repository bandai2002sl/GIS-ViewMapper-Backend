import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'LienKet' })
export class LienKet extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'hinh_thuc_lien_ket', length: '255' })
    hinhThucLienKet: string;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_lien_ket' })
    ngayLienKet: Date;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'trang_thai', length: '255' })
    trangThai: string;

    @ManyToOne(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.lienKets, {
        onDelete: 'CASCADE',
    })
    caNhanHtx: CaNhanHtx
}
