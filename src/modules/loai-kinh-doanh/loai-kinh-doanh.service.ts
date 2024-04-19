import { Injectable } from '@nestjs/common';
import { CreateLoaiKinhDoanhDto } from './dto/create-loai-kinh-doanh.dto';
import { UpdateLoaiKinhDoanhDto } from './dto/update-loai-kinh-doanh.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoaiKinhDoanh } from './entities/loai-kinh-doanh.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class LoaiKinhDoanhService {
  constructor(
    @InjectRepository(LoaiKinhDoanh)
    private LoaiKinhDoanhResposity: Repository<LoaiKinhDoanh>,
  ) { }
  async create(createLoaiKinhDoanhDto: CreateLoaiKinhDoanhDto) {
    try {

      let arrInput = ['loaiKinhDoanh', 'moTa', 'tamNgung'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createLoaiKinhDoanhDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      let createLoaiKD = await this.LoaiKinhDoanhResposity.save(createLoaiKinhDoanhDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createLoaiKD
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    try {
      let cropAll = await this.LoaiKinhDoanhResposity.find()
      return resultData({
        statusCode: 200,
        message: "thành công",
        data: cropAll
      })
    } catch (e) {
      console.log(e)
    }
  }
  async findOne(id: number) {
    return this.LoaiKinhDoanhResposity.findOne({ where: { id: id } });
  }
  async getOne(id: number) {
    try {
      let loaiKDOne = await this.findOne(id)
      if (!loaiKDOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy",
          data: loaiKDOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: loaiKDOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateLoaiKinhDoanhDto: UpdateLoaiKinhDoanhDto) {
    try {
      let loaiKDOne = await this.findOne(id)
      if (!loaiKDOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: loaiKDOne
        })
      } else {
        let arrInput = ['loaiKinhDoanh', 'moTa', 'tamNgung'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateLoaiKinhDoanhDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        await this.LoaiKinhDoanhResposity.update(id, updateLoaiKinhDoanhDto)
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

  async deleteLoaiKD(id: number) {
    try {
      let loaiKDOne = await this.findOne(id)
      if (!loaiKDOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: loaiKDOne
        })
      } else {
        await this.LoaiKinhDoanhResposity.delete(id)
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
