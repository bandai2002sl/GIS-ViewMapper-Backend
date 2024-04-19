import { CreateSanXuatThuySanDto } from './dto/create-san-xuat-thuy-san.dto';
import { UpdateSanXuatThuySanDto } from './dto/update-san-xuat-thuy-san.dto';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { Repository } from 'typeorm';
import { ThuySanService } from '../thuy-san/thuy-san.service';
import { SanXuatThuySan } from './entities/san-xuat-thuy-san.entity';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';
export declare class SanXuatThuySanService {
    private SanXuatThuySanResposity;
    private caNhanHtxService;
    private ThuySanService;
    private kyBaoCaoService;
    constructor(SanXuatThuySanResposity: Repository<SanXuatThuySan>, caNhanHtxService: CaNhanHtxService, ThuySanService: ThuySanService, kyBaoCaoService: KyBaoCaoService);
    create(createSanXuatThuySanDto: CreateSanXuatThuySanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<SanXuatThuySan>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateSanXuatThuySanDto: UpdateSanXuatThuySanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteSanXuatTS(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
