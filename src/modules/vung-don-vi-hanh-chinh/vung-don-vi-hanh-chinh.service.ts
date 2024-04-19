import { Injectable } from '@nestjs/common';
import { CreateVungDonViHanhChinhDto } from './dto/create-vung-don-vi-hanh-chinh.dto';
import { UpdateVungDonViHanhChinhDto } from './dto/update-vung-don-vi-hanh-chinh.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VungDonViHanhChinh } from './entities/vung-don-vi-hanh-chinh.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class VungDonViHanhChinhService {
  constructor(
    @InjectRepository(VungDonViHanhChinh)
    private VungDonViHanhChinhResposity: Repository<VungDonViHanhChinh>,
    private administrativeUnitService: AdministrativeUnitService,
  ) { }

  async create(createVungDonViHanhChinhDto: CreateVungDonViHanhChinhDto) {
    try {
      let { administrativeUnitId, vung, ...Info } = createVungDonViHanhChinhDto;

      let arrInput = ['administrativeUnitId', 'moTa', 'vung'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createVungDonViHanhChinhDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      // 1. Kiểm tra tính hợp lệ của 'vung'
      if (!isValidMultiPolygon(vung)) {
        return resultData({
          statusCode: 400,
          message: "Dữ liệu vùng không hợp lệ! Bạn có thể nhập lại với MULTIPOLYGON(((0 0,0 1,1 1,1 0,0 0)))",
        })
      }
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
        })
      } else {
        let vungHanhChinh = this.VungDonViHanhChinhResposity.create({ administrativeUnit, vung, ...Info });
        let createvungHanhChinh = await this.VungDonViHanhChinhResposity.save(vungHanhChinh);
        return resultData({
          statusCode: 200,
          message: "thêm mới thành công",
          data: createvungHanhChinh
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
      data: await this.VungDonViHanhChinhResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.VungDonViHanhChinhResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let VungHCOne = await this.VungDonViHanhChinhResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
      if (!VungHCOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: VungHCOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateVungDonViHanhChinhDto: UpdateVungDonViHanhChinhDto) {
    try {
      let vungHCOne = await this.findOne(id)
      if (!vungHCOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { administrativeUnitId, vung, ...Info } = updateVungDonViHanhChinhDto;
        let arrInput = ['administrativeUnitId', 'moTa', 'vung'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateVungDonViHanhChinhDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        // 1. Kiểm tra tính hợp lệ của 'vung'
        if (!isValidMultiPolygon(vung)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu vùng không hợp lệ! Bạn có thể nhập lại với MULTIPOLYGON(((0 0,0 1,1 1,1 0,0 0)))",
          })
        }
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
            data: null
          })
        } else {
          await this.VungDonViHanhChinhResposity.update(id, { ...Info, vung, administrativeUnit });
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

  async deleteVungHC(id: number) {
    try {
      let vungHCOne = await this.findOne(id)
      if (!vungHCOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: vungHCOne
        })
      } else {
        await this.VungDonViHanhChinhResposity.delete(id)
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
function isValidMultiPolygon(multiPolygon: string): boolean {

  // Kiểm tra xem nó có bắt đầu bằng 'MULTIPOLYGON' (không phân biệt chữ hoa chữ thường)
  const regex = /^MULTIPOLYGON/i;
  return regex.test(multiPolygon);
}
