import { Repository } from 'typeorm';
import { UploadEntity } from './entities/upload.entity';
import { QueryDelete } from './dto/upload.dto';
import { Pagination } from 'src/common/dto/index.dto';
import { GatewayGateway } from '../gateway/gateway.gateway';
export declare class UploadService {
    private uploadRepository;
    private readonly socket;
    constructor(uploadRepository: Repository<UploadEntity>, socket: GatewayGateway);
    getPathFiles(getListDto: Pagination): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    savePath(filename: string, type: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    delete(queryDelete: QueryDelete): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
