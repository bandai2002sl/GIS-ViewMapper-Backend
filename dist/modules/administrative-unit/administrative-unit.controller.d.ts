import { AdministrativeUnitService } from './administrative-unit.service';
import { CreateAdministrativeUnitDto } from './dto/create-administrative-unit.dto';
import { UpdateAdministrativeUnitDto } from './dto/update-administrative-unit.dto';
export declare class AdministrativeUnitController {
    private readonly administrativeUnitService;
    constructor(administrativeUnitService: AdministrativeUnitService);
    create(createAdministrativeUnitDto: CreateAdministrativeUnitDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    updateAdmin(id: string, updateAdministrativeUnitDto: UpdateAdministrativeUnitDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteAdmin(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
