import { HINH_THUC } from "../entities/dien-tich-tuoi-tieu.entity";
export declare class CreateDienTichTuoiTieuDto {
    dienTich: number;
    ngayThongKe: Date;
    hinhThuc: HINH_THUC;
    administrativeUnitId: number;
    cropTypeId: number;
    toaDo: string;
    icon: string;
}
