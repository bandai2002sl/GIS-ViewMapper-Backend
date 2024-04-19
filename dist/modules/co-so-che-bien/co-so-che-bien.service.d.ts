import { CreateCoSoCheBienDto } from './dto/create-co-so-che-bien.dto';
import { UpdateCoSoCheBienDto } from './dto/update-co-so-che-bien.dto';
import { CoSoCheBien } from './entities/co-so-che-bien.entity';
import { Repository } from 'typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class CoSoCheBienService {
    private CoSoCheBienResposity;
    private caNhanHtxService;
    private administrativeUnitService;
    private kyBaoCaoService;
    constructor(CoSoCheBienResposity: Repository<CoSoCheBien>, caNhanHtxService: CaNhanHtxService, administrativeUnitService: AdministrativeUnitService, kyBaoCaoService: KyBaoCaoService);
    create(createCoSoCheBienDto: CreateCoSoCheBienDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<CoSoCheBien>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateCoSoCheBienDto: UpdateCoSoCheBienDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCheBien(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
