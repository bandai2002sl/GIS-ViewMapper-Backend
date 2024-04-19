import { CreateHanHanDto } from './dto/create-han-han.dto';
import { UpdateHanHanDto } from './dto/update-han-han.dto';
import { HanHan } from './entities/han-han.entity';
import { Repository } from 'typeorm';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class HanHanService {
    private HanHanResposity;
    private cropTypeService;
    private administrativeUnitService;
    private kyBaoCaoService;
    constructor(HanHanResposity: Repository<HanHan>, cropTypeService: CropTypeService, administrativeUnitService: AdministrativeUnitService, kyBaoCaoService: KyBaoCaoService);
    create(createHanHanDto: CreateHanHanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<HanHan>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateHanHanDto: UpdateHanHanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHanHan(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
