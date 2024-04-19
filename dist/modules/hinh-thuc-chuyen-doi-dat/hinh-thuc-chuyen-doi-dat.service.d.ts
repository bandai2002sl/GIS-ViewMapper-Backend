import { CreateHinhThucChuyenDoiDatDto } from './dto/create-hinh-thuc-chuyen-doi-dat.dto';
import { UpdateHinhThucChuyenDoiDatDto } from './dto/update-hinh-thuc-chuyen-doi-dat.dto';
import { HinhThucChuyenDoiDat } from './entities/hinh-thuc-chuyen-doi-dat.entity';
import { Repository } from 'typeorm';
export declare class HinhThucChuyenDoiDatService {
    private HinhThucChuyenDoiDatResposity;
    constructor(HinhThucChuyenDoiDatResposity: Repository<HinhThucChuyenDoiDat>);
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
    findOne(id: number): Promise<HinhThucChuyenDoiDat>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateHinhThucChuyenDoiDatDto: UpdateHinhThucChuyenDoiDatDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHTCDDat(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
