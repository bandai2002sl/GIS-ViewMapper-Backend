import { ChuyenDoiSuDungDatService } from './chuyen-doi-su-dung-dat.service';
import { CreateChuyenDoiSuDungDatDto } from './dto/create-chuyen-doi-su-dung-dat.dto';
import { UpdateChuyenDoiSuDungDatDto } from './dto/update-chuyen-doi-su-dung-dat.dto';
export declare class ChuyenDoiSuDungDatController {
    private readonly chuyenDoiSuDungDatService;
    constructor(chuyenDoiSuDungDatService: ChuyenDoiSuDungDatService);
    create(createChuyenDoiSuDungDatDto: CreateChuyenDoiSuDungDatDto): Promise<{
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
    update(id: string, updateChuyenDoiSuDungDatDto: UpdateChuyenDoiSuDungDatDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteChuyenDoiDat(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
