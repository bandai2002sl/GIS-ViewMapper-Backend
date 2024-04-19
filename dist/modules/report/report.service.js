"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const report_entity_1 = require("./entities/report.entity");
let ReportService = class ReportService {
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async findAll() {
        return this.reportRepository.find();
    }
    async findOne(id) {
        return this.reportRepository.findOne({ where: { id } });
    }
    async create(report) {
        this.reportRepository.save(report);
        return { message: "Tạo báo cáo thành công." };
    }
    async update(id, report) {
        await this.reportRepository.update(id, report);
        return { message: "cập nhật báo cáo thành công." };
    }
    async updateStatus(id, newStatus) {
        const reportToUpdate = await this.reportRepository.findOne({ where: { id } });
        if (!reportToUpdate) {
            throw new common_1.NotFoundException(`Report with id ${id} not found`);
        }
        if (newStatus === "Phê duyệt") {
            reportToUpdate.TrangThai = newStatus;
            reportToUpdate.Public = "true";
        }
        else {
            reportToUpdate.TrangThai = newStatus;
        }
        await this.reportRepository.save(reportToUpdate);
        return { message: "Cập nhật trạng thái báo cáo thành công." };
    }
    async remove(id) {
        await this.reportRepository.delete(id);
        return { message: "Xoá báo cáo thành công." };
    }
};
ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(report_entity_1.Report)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportService);
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map