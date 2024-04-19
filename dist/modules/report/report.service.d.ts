import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReport } from './dto/create-report.dto';
export declare class ReportService {
    private readonly reportRepository;
    constructor(reportRepository: Repository<Report>);
    findAll(): Promise<Report[]>;
    findOne(id: number): Promise<Report>;
    create(report: CreateReport): Promise<{
        message: string;
    }>;
    update(id: number, report: CreateReport): Promise<{
        message: string;
    }>;
    updateStatus(id: number, newStatus: string): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
