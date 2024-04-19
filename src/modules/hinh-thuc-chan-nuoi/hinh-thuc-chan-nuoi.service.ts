import { Injectable } from '@nestjs/common';
import { CreateHinhThucChanNuoiDto } from './dto/create-hinh-thuc-chan-nuoi.dto';
import { UpdateHinhThucChanNuoiDto } from './dto/update-hinh-thuc-chan-nuoi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HinhThucChanNuoi } from './entities/hinh-thuc-chan-nuoi.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class HinhThucChanNuoiService {
  constructor(
    @InjectRepository(HinhThucChanNuoi)
    private HinhThucChanNuoiResposity: Repository<HinhThucChanNuoi>,
  ) { }
  async create(createHinhThucChanNuoiDto: CreateHinhThucChanNuoiDto) {
    try {
      let arrInput = ['tenHinhThuc', 'tamNgung'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createHinhThucChanNuoiDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      let createNewHinhThucCN = await this.HinhThucChanNuoiResposity.save(createHinhThucChanNuoiDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createNewHinhThucCN
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    try {
      let hinhThucAll = await this.HinhThucChanNuoiResposity.find()
      return resultData({
        statusCode: 200,
        message: "thành công",
        data: hinhThucAll
      })
    } catch (e) {
      console.log(e)
    }
  }
  async findOne(id: number) {
    return this.HinhThucChanNuoiResposity.findOne({ where: { id: id } });
  }
  async getOne(id: number) {
    try {
      let hinhThucOne = await this.findOne(id)
      if (!hinhThucOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy",
          data: hinhThucOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: hinhThucOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }


  async update(id: number, updateHinhThucChanNuoiDto: UpdateHinhThucChanNuoiDto) {
    try {
      let hinhThucOne = await this.findOne(id)
      if (!hinhThucOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: hinhThucOne
        })
      } else {
        let arrInput = ['tenHinhThuc', 'tamNgung'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateHinhThucChanNuoiDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        await this.HinhThucChanNuoiResposity.update(id, updateHinhThucChanNuoiDto)
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

  async deleteHinhThucCN(id: number) {
    try {
      let hinhThucOne = await this.findOne(id)
      if (!hinhThucOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: hinhThucOne
        })
      } else {
        await this.HinhThucChanNuoiResposity.delete(id)
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
