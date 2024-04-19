import { CreateSanXuatTrongTrotDto } from './dto/create-san-xuat-trong-trot.dto';
import { UpdateSanXuatTrongTrotDto } from './dto/update-san-xuat-trong-trot.dto';
import { SanXuatTrongTrot } from './entities/san-xuat-trong-trot.entity';
import { Repository } from 'typeorm';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class SanXuatTrongTrotService {
    private SanXuatTrongTrotResposity;
    private cropTypeService;
    private administrativeUnitService;
    private kyBaoCaoService;
    constructor(SanXuatTrongTrotResposity: Repository<SanXuatTrongTrot>, cropTypeService: CropTypeService, administrativeUnitService: AdministrativeUnitService, kyBaoCaoService: KyBaoCaoService);
    create(createSanXuatTrongTrotDto: CreateSanXuatTrongTrotDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<SanXuatTrongTrot>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateSanXuatTrongTrotDto: UpdateSanXuatTrongTrotDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteSanXuatTT(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
