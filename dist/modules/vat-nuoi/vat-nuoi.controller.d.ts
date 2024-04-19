import { VatNuoiService } from './vat-nuoi.service';
import { CreateVatNuoiDto } from './dto/create-vat-nuoi.dto';
import { UpdateVatNuoiDto } from './dto/update-vat-nuoi.dto';
export declare class VatNuoiController {
    private readonly vatNuoiService;
    constructor(vatNuoiService: VatNuoiService);
    create(createVatNuoiDto: CreateVatNuoiDto): Promise<{
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
    update(id: string, updateVatNuoiDto: UpdateVatNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteVatNuoi(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
