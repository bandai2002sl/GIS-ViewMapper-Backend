import { CreateVungChanNuoiAnToanDto } from './dto/create-vung-chan-nuoi-an-toan.dto';
import { UpdateVungChanNuoiAnToanDto } from './dto/update-vung-chan-nuoi-an-toan.dto';
import { VungChanNuoiAnToan } from './entities/vung-chan-nuoi-an-toan.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class VungChanNuoiAnToanService {
    private VungChanNuoiAnToanResposity;
    private administrativeUnitService;
    private vatNuoiService;
    private kyBaoCaoService;
    constructor(VungChanNuoiAnToanResposity: Repository<VungChanNuoiAnToan>, administrativeUnitService: AdministrativeUnitService, vatNuoiService: VatNuoiService, kyBaoCaoService: KyBaoCaoService);
    create(createVungChanNuoiAnToanDto: CreateVungChanNuoiAnToanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<VungChanNuoiAnToan>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateVungChanNuoiAnToanDto: UpdateVungChanNuoiAnToanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteVungAnToan(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
