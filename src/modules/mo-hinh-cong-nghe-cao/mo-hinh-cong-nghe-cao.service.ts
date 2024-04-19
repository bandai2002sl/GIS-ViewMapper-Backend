import { Injectable } from '@nestjs/common';
import { CreateMoHinhCongNgheCaoDto } from './dto/create-mo-hinh-cong-nghe-cao.dto';
import { UpdateMoHinhCongNgheCaoDto } from './dto/update-mo-hinh-cong-nghe-cao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoHinhCongNgheCao } from './entities/mo-hinh-cong-nghe-cao.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class MoHinhCongNgheCaoService {
  constructor(
    @InjectRepository(MoHinhCongNgheCao)
    private MoHinhCongNgheCaoResposity: Repository<MoHinhCongNgheCao>,
    private caNhanHtxService: CaNhanHtxService,
    private administrativeUnitService: AdministrativeUnitService,
  ) { }
  async create(createMoHinhCongNgheCaoDto: CreateMoHinhCongNgheCaoDto) {
    try {
      let { caNhanHtxId, administrativeUnitId, ...Info } = createMoHinhCongNgheCaoDto;
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      let arrInput = ['administrativeUnitId', 'caNhanHtxId', 'address', 'moTa', 'dienTich', 'congNgheSuDung', 'trangThai'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createMoHinhCongNgheCaoDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      if (!caNhanHtx || !administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId hoặc donvihanhchinhId",
          data: null
        })
      } else {
        let moHinhCNC = this.MoHinhCongNgheCaoResposity.create({ caNhanHtx, administrativeUnit, ...Info });
        let createMoHinhCNC = await this.MoHinhCongNgheCaoResposity.save(moHinhCNC);
        return resultData({
          statusCode: 200,
          message: "thêm mới thành công",
          data: createMoHinhCNC
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.MoHinhCongNgheCaoResposity.find({ relations: ['caNhanHtx', 'administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.MoHinhCongNgheCaoResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'administrativeUnit'] });
  }
  async getOne(id: number) {
    try {
      let moHinhCNCOne = await this.MoHinhCongNgheCaoResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'administrativeUnit'] });
      if (!moHinhCNCOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: moHinhCNCOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateMoHinhCongNgheCaoDto: UpdateMoHinhCongNgheCaoDto) {
    try {
      let moHinhCNCOne = await this.findOne(id)
      if (!moHinhCNCOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, administrativeUnitId, ...Info } = updateMoHinhCongNgheCaoDto;
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

        let arrInput = ['administrativeUnitId', 'caNhanHtxId', 'address', 'moTa', 'dienTich', 'congNgheSuDung', 'trangThai'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateMoHinhCongNgheCaoDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        if (!caNhanHtx || !administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId hoặc donvihanhchinhId",
            data: null
          })
        } else {
          await this.MoHinhCongNgheCaoResposity.update(id, { ...Info, caNhanHtx, administrativeUnit });
          return resultData({
            statusCode: 200,
            message: 'Sửa Thành công',
            data: await this.findOne(id)
          })
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  async deleteMoHinhCNC(id: number) {
    try {
      let moHinhCNCOne = await this.findOne(id)
      if (!moHinhCNCOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: moHinhCNCOne
        })
      } else {
        await this.MoHinhCongNgheCaoResposity.delete(id)
        return resultData({
          statusCode: 200,
          message: "Xóa thành công",
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
