import { Injectable } from '@nestjs/common';
import { CreateHinhThucChuyenDoiDatDto } from './dto/create-hinh-thuc-chuyen-doi-dat.dto';
import { UpdateHinhThucChuyenDoiDatDto } from './dto/update-hinh-thuc-chuyen-doi-dat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HinhThucChuyenDoiDat } from './entities/hinh-thuc-chuyen-doi-dat.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class HinhThucChuyenDoiDatService {
  constructor(
    @InjectRepository(HinhThucChuyenDoiDat)
    private HinhThucChuyenDoiDatResposity: Repository<HinhThucChuyenDoiDat>,
  ) { }
  async create(createHinhThucChuyenDoiDatDto: CreateHinhThucChuyenDoiDatDto) {
    try {
      let arrInput = ['tenHinhThuc', 'tamNgung'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createHinhThucChuyenDoiDatDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      let createDat = await this.HinhThucChuyenDoiDatResposity.save(createHinhThucChuyenDoiDatDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createDat
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    try {
      let datAll = await this.HinhThucChuyenDoiDatResposity.find()
      return resultData({
        statusCode: 200,
        message: "thành công",
        data: datAll
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findOne(id: number) {
    return this.HinhThucChuyenDoiDatResposity.findOne({ where: { id: id } });
  }

  async getOne(id: number) {
    try {
      let datOne = await this.findOne(id)
      if (!datOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy kiêm tra lại id",
          data: datOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: datOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateHinhThucChuyenDoiDatDto: UpdateHinhThucChuyenDoiDatDto) {
    try {
      let datOne = await this.findOne(id)
      if (!datOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: datOne
        })
      } else {
        let arrInput = ['tenHinhThuc', 'tamNgung'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateHinhThucChuyenDoiDatDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        await this.HinhThucChuyenDoiDatResposity.update(id, updateHinhThucChuyenDoiDatDto)
        return resultData({
          statusCode: 200,
          message: "Sửa thành công",
          data: await this.findOne(id)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async deleteHTCDDat(id: number) {
    try {
      let datOne = await this.findOne(id)
      if (!datOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: datOne
        })
      } else {
        await this.HinhThucChuyenDoiDatResposity.delete(id)
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
