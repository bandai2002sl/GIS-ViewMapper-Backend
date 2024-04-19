import { CreateChuyenDoiSuDungDatDto } from './dto/create-chuyen-doi-su-dung-dat.dto';
import { UpdateChuyenDoiSuDungDatDto } from './dto/update-chuyen-doi-su-dung-dat.dto';
import { ChuyenDoiSuDungDat } from './entities/chuyen-doi-su-dung-dat.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { HinhThucChuyenDoiDatService } from '../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class ChuyenDoiSuDungDatService {
    private ChuyenDoiSuDungDatResposity;
    private hinhThucChuyenDoiDatService;
    private administrativeUnitService;
    private kyBaoCaoService;
    constructor(ChuyenDoiSuDungDatResposity: Repository<ChuyenDoiSuDungDat>, hinhThucChuyenDoiDatService: HinhThucChuyenDoiDatService, administrativeUnitService: AdministrativeUnitService, kyBaoCaoService: KyBaoCaoService);
    create(createChuyenDoiSuDungDatDto: CreateChuyenDoiSuDungDatDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<ChuyenDoiSuDungDat>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateChuyenDoiSuDungDatDto: UpdateChuyenDoiSuDungDatDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteChuyenDoiDat(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
