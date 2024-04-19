import { DienTichTuoiTieuService } from './dien-tich-tuoi-tieu.service';
import { CreateDienTichTuoiTieuDto } from './dto/create-dien-tich-tuoi-tieu.dto';
import { UpdateDienTichTuoiTieuDto } from './dto/update-dien-tich-tuoi-tieu.dto';
export declare class DienTichTuoiTieuController {
    private readonly dienTichTuoiTieuService;
    constructor(dienTichTuoiTieuService: DienTichTuoiTieuService);
    create(createDienTichTuoiTieuDto: CreateDienTichTuoiTieuDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateDienTichTuoiTieuDto: UpdateDienTichTuoiTieuDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
