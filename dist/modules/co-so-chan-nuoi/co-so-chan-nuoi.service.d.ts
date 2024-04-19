import { CreateCoSoChanNuoiDto } from './dto/create-co-so-chan-nuoi.dto';
import { UpdateCoSoChanNuoiDto } from './dto/update-co-so-chan-nuoi.dto';
import { CoSoChanNuoi } from './entities/co-so-chan-nuoi.entity';
import { Repository } from 'typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { HinhThucChanNuoiService } from '../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class CoSoChanNuoiService {
    private CoSoChanNuoiResposity;
    private caNhanHtxService;
    private vatNuoiService;
    private hinhThucChanNuoiService;
    private kyBaoCaoService;
    constructor(CoSoChanNuoiResposity: Repository<CoSoChanNuoi>, caNhanHtxService: CaNhanHtxService, vatNuoiService: VatNuoiService, hinhThucChanNuoiService: HinhThucChanNuoiService, kyBaoCaoService: KyBaoCaoService);
    create(createCoSoChanNuoiDto: CreateCoSoChanNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<CoSoChanNuoi>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateCoSoChanNuoiDto: UpdateCoSoChanNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCoSoCN(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
