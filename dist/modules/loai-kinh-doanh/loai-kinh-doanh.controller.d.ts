import { LoaiKinhDoanhService } from './loai-kinh-doanh.service';
import { CreateLoaiKinhDoanhDto } from './dto/create-loai-kinh-doanh.dto';
import { UpdateLoaiKinhDoanhDto } from './dto/update-loai-kinh-doanh.dto';
export declare class LoaiKinhDoanhController {
    private readonly loaiKinhDoanhService;
    constructor(loaiKinhDoanhService: LoaiKinhDoanhService);
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
    getOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateLoaiKinhDoanhDto: UpdateLoaiKinhDoanhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteLoaiKD(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
