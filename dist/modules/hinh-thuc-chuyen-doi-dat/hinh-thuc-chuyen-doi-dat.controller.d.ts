import { HinhThucChuyenDoiDatService } from './hinh-thuc-chuyen-doi-dat.service';
import { CreateHinhThucChuyenDoiDatDto } from './dto/create-hinh-thuc-chuyen-doi-dat.dto';
import { UpdateHinhThucChuyenDoiDatDto } from './dto/update-hinh-thuc-chuyen-doi-dat.dto';
export declare class HinhThucChuyenDoiDatController {
    private readonly hinhThucChuyenDoiDatService;
    constructor(hinhThucChuyenDoiDatService: HinhThucChuyenDoiDatService);
    create(createHinhThucChuyenDoiDatDto: CreateHinhThucChuyenDoiDatDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateHinhThucChuyenDoiDatDto: UpdateHinhThucChuyenDoiDatDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHTCDDat(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
