// src/reports/reports.controller.ts
import { Controller, Get, Post, Delete, Param, Body, UseGuards, Put, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './entities/report.entity';
import { CreateReport } from './dto/create-report.dto';
import { AuthGuard } from '../authentication/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../authentication/roles.decorator';


@ApiTags('Báo cáo')
@Controller('reports')
export class ReportController {
  constructor(private readonly reportsService: ReportService) {}

  
  @Get()
  findAll(): Promise<Report[]> {
    return this.reportsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Report> {
    return this.reportsService.findOne(+id);
  }

  
  @UseGuards(AuthGuard)
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() newReport: CreateReport): Promise<{message : string}> {
    return this.reportsService.create(newReport);
  }

   
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() report: CreateReport): Promise<{message : string}> {
    return this.reportsService.update(+id, report);
  }

   
  @UseGuards(AuthGuard)
  @Patch(':id')
  updateStatus(@Param('id') id: string, @Body("newStatus") newStatus: string): Promise<{message : string}> {
    return this.reportsService.updateStatus(+id, newStatus);
  }


  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<{message : string}> {
    return this.reportsService.remove(+id);
  }
}
