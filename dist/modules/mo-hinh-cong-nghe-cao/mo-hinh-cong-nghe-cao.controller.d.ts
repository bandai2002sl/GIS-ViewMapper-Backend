import { MoHinhCongNgheCaoService } from './mo-hinh-cong-nghe-cao.service';
import { CreateMoHinhCongNgheCaoDto } from './dto/create-mo-hinh-cong-nghe-cao.dto';
import { UpdateMoHinhCongNgheCaoDto } from './dto/update-mo-hinh-cong-nghe-cao.dto';
export declare class MoHinhCongNgheCaoController {
    private readonly moHinhCongNgheCaoService;
    constructor(moHinhCongNgheCaoService: MoHinhCongNgheCaoService);
    create(createMoHinhCongNgheCaoDto: CreateMoHinhCongNgheCaoDto): Promise<{
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
    update(id: string, updateMoHinhCongNgheCaoDto: UpdateMoHinhCongNgheCaoDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteMoHinhCNC(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
