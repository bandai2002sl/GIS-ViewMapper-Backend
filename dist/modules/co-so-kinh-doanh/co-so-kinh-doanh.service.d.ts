import { CreateCoSoKinhDoanhDto } from './dto/create-co-so-kinh-doanh.dto';
import { UpdateCoSoKinhDoanhDto } from './dto/update-co-so-kinh-doanh.dto';
import { CoSoKinhDoanh } from './entities/co-so-kinh-doanh.entity';
import { Repository } from 'typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { LoaiKinhDoanhService } from '../loai-kinh-doanh/loai-kinh-doanh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
export declare class CoSoKinhDoanhService {
    private CoSoKinhDoanhResposity;
    private caNhanHtxService;
    private loaiKinhDoanhService;
    private administrativeUnitService;
    constructor(CoSoKinhDoanhResposity: Repository<CoSoKinhDoanh>, caNhanHtxService: CaNhanHtxService, loaiKinhDoanhService: LoaiKinhDoanhService, administrativeUnitService: AdministrativeUnitService);
    create(createCoSoKinhDoanhDto: CreateCoSoKinhDoanhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<CoSoKinhDoanh>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateCoSoKinhDoanhDto: UpdateCoSoKinhDoanhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCoSoKD(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
