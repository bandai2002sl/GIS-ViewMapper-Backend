import { CreateMoHinhCongNgheCaoDto } from './dto/create-mo-hinh-cong-nghe-cao.dto';
import { UpdateMoHinhCongNgheCaoDto } from './dto/update-mo-hinh-cong-nghe-cao.dto';
import { MoHinhCongNgheCao } from './entities/mo-hinh-cong-nghe-cao.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
export declare class MoHinhCongNgheCaoService {
    private MoHinhCongNgheCaoResposity;
    private caNhanHtxService;
    private administrativeUnitService;
    constructor(MoHinhCongNgheCaoResposity: Repository<MoHinhCongNgheCao>, caNhanHtxService: CaNhanHtxService, administrativeUnitService: AdministrativeUnitService);
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
    findOne(id: number): Promise<MoHinhCongNgheCao>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateMoHinhCongNgheCaoDto: UpdateMoHinhCongNgheCaoDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteMoHinhCNC(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
