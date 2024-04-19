import { SanXuatVatNuoiService } from './san-xuat-vat-nuoi.service';
import { CreateSanXuatVatNuoiDto } from './dto/create-san-xuat-vat-nuoi.dto';
import { UpdateSanXuatVatNuoiDto } from './dto/update-san-xuat-vat-nuoi.dto';
export declare class SanXuatVatNuoiController {
    private readonly sanXuatVatNuoiService;
    constructor(sanXuatVatNuoiService: SanXuatVatNuoiService);
    create(createSanXuatVatNuoiDto: CreateSanXuatVatNuoiDto): Promise<{
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
    update(id: string, updateSanXuatVatNuoiDto: UpdateSanXuatVatNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteSanXuatVN(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
