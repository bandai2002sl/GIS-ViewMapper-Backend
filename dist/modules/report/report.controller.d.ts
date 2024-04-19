import { ReportService } from './report.service';
import { Report } from './entities/report.entity';
import { CreateReport } from './dto/create-report.dto';
export declare class ReportController {
    private readonly reportsService;
    constructor(reportsService: ReportService);
    findAll(): Promise<Report[]>;
    findOne(id: string): Promise<Report>;
    create(newReport: CreateReport): Promise<{
        message: string;
    }>;
    update(id: string, report: CreateReport): Promise<{
        message: string;
    }>;
    updateStatus(id: string, newStatus: string): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
