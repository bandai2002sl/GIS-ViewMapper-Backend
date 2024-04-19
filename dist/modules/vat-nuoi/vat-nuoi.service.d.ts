import { CreateVatNuoiDto } from './dto/create-vat-nuoi.dto';
import { UpdateVatNuoiDto } from './dto/update-vat-nuoi.dto';
import { VatNuoi } from './entities/vat-nuoi.entity';
import { Repository } from 'typeorm';
export declare class VatNuoiService {
    private VatNuoiResposity;
    constructor(VatNuoiResposity: Repository<VatNuoi>);
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
    findOne(id: number): Promise<VatNuoi>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateVatNuoiDto: UpdateVatNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteVatNuoi(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
