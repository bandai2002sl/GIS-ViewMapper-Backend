import { CreateSanXuatVatNuoiDto } from './dto/create-san-xuat-vat-nuoi.dto';
import { UpdateSanXuatVatNuoiDto } from './dto/update-san-xuat-vat-nuoi.dto';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { Repository } from 'typeorm';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { SanXuatVatNuoi } from './entities/san-xuat-vat-nuoi.entity';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class SanXuatVatNuoiService {
    private SanXuatVatNuoiResposity;
    private caNhanHtxService;
    private vatNuoiService;
    private kyBaoCaoService;
    constructor(SanXuatVatNuoiResposity: Repository<SanXuatVatNuoi>, caNhanHtxService: CaNhanHtxService, vatNuoiService: VatNuoiService, kyBaoCaoService: KyBaoCaoService);
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
    findOne(id: number): Promise<SanXuatVatNuoi>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateSanXuatVatNuoiDto: UpdateSanXuatVatNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteSanXuatVN(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
