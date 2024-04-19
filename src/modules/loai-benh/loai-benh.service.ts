import { Injectable } from '@nestjs/common';
import { CreateLoaiBenhDto } from './dto/create-loai-benh.dto';
import { UpdateLoaiBenhDto } from './dto/update-loai-benh.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { LoaiBenh } from './entities/loai-benh.entity';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class LoaiBenhService {
  constructor(
    @InjectRepository(LoaiBenh)
    private LoaiBenhResposity: Repository<LoaiBenh>,
  ) { }
  async create(createLoaiBenhDto: CreateLoaiBenhDto) {
    try {
      let arrInput = ['tenBenh', 'moTa', 'hinhAnh', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createLoaiBenhDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      let createLoaiBenh = await this.LoaiBenhResposity.save(createLoaiBenhDto)
      return resultData({
        statusCode: 200,
        message: "tạo mới thành công",
        data: createLoaiBenh
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    try {
      let loaiBenhAll = await this.LoaiBenhResposity.find()
      return resultData({
        statusCode: 200,
        message: "thành công",
        data: loaiBenhAll
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findOne(id: number) {
    return this.LoaiBenhResposity.findOne({ where: { id: id } });
  }

  async getOne(id: number) {
    try {
      let loaiBenhOne = await this.LoaiBenhResposity.findOne({ where: { id: id } });
      if (!loaiBenhOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy loại bệnh",
          data: loaiBenhOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: loaiBenhOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async editLoaiBenh(id: number, updateLoaiBenhDto: UpdateLoaiBenhDto) {
    try {
      let loaiBenh = await this.findOne(id)
      if (!loaiBenh) {
        return resultData({
          statusCode: 400,
          message: "loai bệnh này không tồn tại Vui lòng kiểm tra lại Id",
          data: loaiBenh
        })
      } else {
        let arrInput = ['tenBenh', 'moTa', 'hinhAnh', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateLoaiBenhDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        await this.LoaiBenhResposity.update(id, updateLoaiBenhDto)
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
  async deleteLoaiBenh(id: number) {
    try {
      let loaiBenh = await this.findOne(id)
      if (!loaiBenh) {
        return resultData({
          statusCode: 400,
          message: "Loai bệnh không tồn tại, Vui lòng kiêm tra lại Id",
          data: loaiBenh
        })
      } else {
        await this.LoaiBenhResposity.delete(id)
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
