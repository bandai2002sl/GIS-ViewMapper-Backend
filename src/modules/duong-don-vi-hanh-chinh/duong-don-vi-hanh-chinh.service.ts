import { Injectable } from '@nestjs/common';
import { CreateDuongDonViHanhChinhDto } from './dto/create-duong-don-vi-hanh-chinh.dto';
import { UpdateDuongDonViHanhChinhDto } from './dto/update-duong-don-vi-hanh-chinh.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DuongDonViHanhChinh } from './entities/duong-don-vi-hanh-chinh.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class DuongDonViHanhChinhService {
  constructor(
    @InjectRepository(DuongDonViHanhChinh)
    private DuongDonViHanhChinhResposity: Repository<DuongDonViHanhChinh>,
    private administrativeUnitService: AdministrativeUnitService,
  ) { }

  async create(createDuongDonViHanhChinhDto: CreateDuongDonViHanhChinhDto) {
    try {
      let { administrativeUnitId, duong, ...Info } = createDuongDonViHanhChinhDto;

      let arrInput = ['administrativeUnitId', 'duong'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createDuongDonViHanhChinhDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      // 1. Kiểm tra tính hợp lệ của 'duong'
      if (!isValidMultiPolygon(duong)) {
        return resultData({
          statusCode: 400,
          message: "Dữ liệu duong không hợp lệ! Bạn có thể nhập lại với MULTIPOLYGON(((0 0,0 1,1 1,1 0,0 0)))",
        })
      }
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
        })
      } else {
        let duongHanhChinh = this.DuongDonViHanhChinhResposity.create({ administrativeUnit, duong, ...Info });
        let createduongHanhChinh = await this.DuongDonViHanhChinhResposity.save(duongHanhChinh);
        return resultData({
          statusCode: 200,
          message: "thêm mới thành công",
          data: createduongHanhChinh
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
      data: await this.DuongDonViHanhChinhResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.DuongDonViHanhChinhResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let duongHCOne = await this.DuongDonViHanhChinhResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
      if (!duongHCOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: duongHCOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateDuongDonViHanhChinhDto: UpdateDuongDonViHanhChinhDto) {
    try {
      let duongHCOne = await this.findOne(id)
      if (!duongHCOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { administrativeUnitId, duong, ...Info } = updateDuongDonViHanhChinhDto;

        let arrInput = ['administrativeUnitId', 'duong'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateDuongDonViHanhChinhDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        // 1. Kiểm tra tính hợp lệ của 'duong'
        console.log(duong)
        if (!isValidMultiPolygon(duong)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu duong không hợp lệ! Bạn có thể nhập lại với MULTIPOLYGON(((0 0,0 1,1 1,1 0,0 0)))",
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
          await this.DuongDonViHanhChinhResposity.update(id, { ...Info, duong, administrativeUnit });
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

  async deleteDuongHC(id: number) {
    try {
      let duongHCOne = await this.findOne(id)
      if (!duongHCOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: duongHCOne
        })
      } else {
        await this.DuongDonViHanhChinhResposity.delete(id)
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

