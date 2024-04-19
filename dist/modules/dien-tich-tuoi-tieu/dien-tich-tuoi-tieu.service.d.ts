import { CreateDienTichTuoiTieuDto } from './dto/create-dien-tich-tuoi-tieu.dto';
import { UpdateDienTichTuoiTieuDto } from './dto/update-dien-tich-tuoi-tieu.dto';
import { DienTichTuoiTieu } from './entities/dien-tich-tuoi-tieu.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CropTypeService } from '../crop-type/crop-type.service';
export declare class DienTichTuoiTieuService {
    private stuoiTieuResposity;
    private administrativeUnitService;
    private cropTypeService;
    constructor(stuoiTieuResposity: Repository<DienTichTuoiTieu>, administrativeUnitService: AdministrativeUnitService, cropTypeService: CropTypeService);
    create(createDienTichTuoiTieuDto: CreateDienTichTuoiTieuDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<DienTichTuoiTieu>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateDienTichTuoiTieuDto: UpdateDienTichTuoiTieuDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
