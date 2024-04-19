import { CreateDuongDonViHanhChinhDto } from './dto/create-duong-don-vi-hanh-chinh.dto';
import { UpdateDuongDonViHanhChinhDto } from './dto/update-duong-don-vi-hanh-chinh.dto';
import { DuongDonViHanhChinh } from './entities/duong-don-vi-hanh-chinh.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
export declare class DuongDonViHanhChinhService {
    private DuongDonViHanhChinhResposity;
    private administrativeUnitService;
    constructor(DuongDonViHanhChinhResposity: Repository<DuongDonViHanhChinh>, administrativeUnitService: AdministrativeUnitService);
    create(createDuongDonViHanhChinhDto: CreateDuongDonViHanhChinhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<DuongDonViHanhChinh>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateDuongDonViHanhChinhDto: UpdateDuongDonViHanhChinhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteDuongHC(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
