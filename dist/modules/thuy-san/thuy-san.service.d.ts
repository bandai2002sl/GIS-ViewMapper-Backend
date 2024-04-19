import { CreateThuySanDto } from './dto/create-thuy-san.dto';
import { UpdateThuySanDto } from './dto/update-thuy-san.dto';
import { ThuySan } from './entities/thuy-san.entity';
import { Repository } from 'typeorm';
export declare class ThuySanService {
    private ThuySanResposity;
    constructor(ThuySanResposity: Repository<ThuySan>);
    create(createThuySanDto: CreateThuySanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<ThuySan>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateThuySanDto: UpdateThuySanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteThuySan(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
