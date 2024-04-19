import { BenhVatNuoiService } from './benh-vat-nuoi.service';
import { CreateBenhVatNuoiDto } from './dto/create-benh-vat-nuoi.dto';
import { UpdateBenhVatNuoiDto } from './dto/update-benh-vat-nuoi.dto';
export declare class BenhVatNuoiController {
    private readonly benhVatNuoiService;
    constructor(benhVatNuoiService: BenhVatNuoiService);
    create(createBenhVatNuoiDto: CreateBenhVatNuoiDto): Promise<{
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
    update(id: string, updateBenhVatNuoiDto: UpdateBenhVatNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteBenhVatNuoi(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
