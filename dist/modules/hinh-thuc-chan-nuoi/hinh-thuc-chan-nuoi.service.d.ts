import { CreateHinhThucChanNuoiDto } from './dto/create-hinh-thuc-chan-nuoi.dto';
import { UpdateHinhThucChanNuoiDto } from './dto/update-hinh-thuc-chan-nuoi.dto';
import { HinhThucChanNuoi } from './entities/hinh-thuc-chan-nuoi.entity';
import { Repository } from 'typeorm';
export declare class HinhThucChanNuoiService {
    private HinhThucChanNuoiResposity;
    constructor(HinhThucChanNuoiResposity: Repository<HinhThucChanNuoi>);
    create(createHinhThucChanNuoiDto: CreateHinhThucChanNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<HinhThucChanNuoi>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateHinhThucChanNuoiDto: UpdateHinhThucChanNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHinhThucCN(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
