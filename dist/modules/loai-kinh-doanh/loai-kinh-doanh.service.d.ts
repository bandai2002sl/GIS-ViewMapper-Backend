import { CreateLoaiKinhDoanhDto } from './dto/create-loai-kinh-doanh.dto';
import { UpdateLoaiKinhDoanhDto } from './dto/update-loai-kinh-doanh.dto';
import { LoaiKinhDoanh } from './entities/loai-kinh-doanh.entity';
import { Repository } from 'typeorm';
export declare class LoaiKinhDoanhService {
    private LoaiKinhDoanhResposity;
    constructor(LoaiKinhDoanhResposity: Repository<LoaiKinhDoanh>);
    create(createLoaiKinhDoanhDto: CreateLoaiKinhDoanhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<LoaiKinhDoanh>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateLoaiKinhDoanhDto: UpdateLoaiKinhDoanhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteLoaiKD(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
