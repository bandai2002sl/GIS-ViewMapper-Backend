import { CreateBenhCayDto } from './dto/create-benh-cay.dto';
import { UpdateBenhCayDto } from './dto/update-benh-cay.dto';
import { BenhCay } from './entities/benh-cay.entity';
import { Repository } from 'typeorm';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { LoaiBenhService } from '../loai-benh/loai-benh.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class BenhCayService {
    private BenhCayResposity;
    private cropTypeService;
    private loaiBenhService;
    private administrativeUnitService;
    private kyBaoCaoService;
    constructor(BenhCayResposity: Repository<BenhCay>, cropTypeService: CropTypeService, loaiBenhService: LoaiBenhService, administrativeUnitService: AdministrativeUnitService, kyBaoCaoService: KyBaoCaoService);
    create(createBenhCayDto: CreateBenhCayDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<BenhCay>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateBenhCayDto: UpdateBenhCayDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteBenhCay(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
