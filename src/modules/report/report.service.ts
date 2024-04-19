// src/reports/reports.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReport } from './dto/create-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  async findAll(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  async findOne(id: number): Promise<Report> {
    return this.reportRepository.findOne({ where: { id } });
  }

  async create(report: CreateReport): Promise<{message : string}> {
     this.reportRepository.save(report);
     return {message: "Tạo báo cáo thành công."}
  }

  async update(id: number, report: CreateReport): Promise<{message : string}> {
    await this.reportRepository.update(id, report);
    return {message: "cập nhật báo cáo thành công."}
  }

   async updateStatus(id: number, newStatus: string): Promise<{message : string}> {
    // Tìm bản ghi với id

    const reportToUpdate = await this.reportRepository.findOne({where : {id}});
    // Kiểm tra xem bản ghi có tồn tại không
    if (!reportToUpdate) {
      throw new NotFoundException(`Report with id ${id} not found`);
    }
    
    if(newStatus === "Phê duyệt"){
      // Cập nhật trường Status
      reportToUpdate.TrangThai = newStatus;
      reportToUpdate.Public = "true";
      
    }else {
      reportToUpdate.TrangThai = newStatus;
      
    }


    // Lưu bản ghi đã cập nhật vào cơ sở dữ liệu
    await this.reportRepository.save(reportToUpdate);

    return {message : "Cập nhật trạng thái báo cáo thành công."};
  }

  //  async updateStatusPublic(id: number, newStatus: string): Promise<{message : string}> {
  //   // Tìm bản ghi với id

  //   const reportToUpdate = await this.reportRepository.findOne({where : {id}});
  //   // Kiểm tra xem bản ghi có tồn tại không
  //   if (!reportToUpdate) {
  //     throw new NotFoundException(`Report with id ${id} not found`);
  //   }
    
  //   // Cập nhật trường Public
  //   reportToUpdate.Public = newStatus;

  //   // Lưu bản ghi đã cập nhật vào cơ sở dữ liệu
  //   await this.reportRepository.save(reportToUpdate);

  //   return {message : "Cập nhật trạng thái báo cáo thành công."};
  // }

  async remove(id: number): Promise<{message : string}> {
    await this.reportRepository.delete(id);

    return {message : "Xoá báo cáo thành công."};


  }
}
