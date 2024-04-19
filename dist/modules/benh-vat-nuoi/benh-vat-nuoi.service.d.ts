import { CreateBenhVatNuoiDto } from './dto/create-benh-vat-nuoi.dto';
import { UpdateBenhVatNuoiDto } from './dto/update-benh-vat-nuoi.dto';
import { BenhVatNuoi } from './entities/benh-vat-nuoi.entity';
import { Repository } from 'typeorm';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { LoaiBenhService } from '../loai-benh/loai-benh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class BenhVatNuoiService {
    private BenhVatNuoiResposity;
    private vatNuoiService;
    private loaiBenhService;
    private administrativeUnitService;
    private kyBaoCaoService;
    constructor(BenhVatNuoiResposity: Repository<BenhVatNuoi>, vatNuoiService: VatNuoiService, loaiBenhService: LoaiBenhService, administrativeUnitService: AdministrativeUnitService, kyBaoCaoService: KyBaoCaoService);
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
    findOne(id: number): Promise<BenhVatNuoi>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateBenhVatNuoiDto: UpdateBenhVatNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteBenhVatNuoi(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
