import { CreateTauCaDto } from './dto/create-tau-ca.dto';
import { UpdateTauCaDto } from './dto/update-tau-ca.dto';
import { TauCa } from './entities/tau-ca.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
export declare class TauCaService {
    private tauCaRepository;
    private administrativeUnitService;
    private caNhanHtxService;
    constructor(tauCaRepository: Repository<TauCa>, administrativeUnitService: AdministrativeUnitService, caNhanHtxService: CaNhanHtxService);
    create(createTauCaDto: CreateTauCaDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<TauCa>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateTauCaDto: UpdateTauCaDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
