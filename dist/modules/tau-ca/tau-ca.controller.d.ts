import { TauCaService } from './tau-ca.service';
import { CreateTauCaDto } from './dto/create-tau-ca.dto';
import { UpdateTauCaDto } from './dto/update-tau-ca.dto';
export declare class TauCaController {
    private readonly tauCaService;
    constructor(tauCaService: TauCaService);
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
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateTauCaDto: UpdateTauCaDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
