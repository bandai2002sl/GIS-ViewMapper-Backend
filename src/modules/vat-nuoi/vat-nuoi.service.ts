import { Injectable } from '@nestjs/common';
import { CreateVatNuoiDto } from './dto/create-vat-nuoi.dto';
import { UpdateVatNuoiDto } from './dto/update-vat-nuoi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VatNuoi } from './entities/vat-nuoi.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class VatNuoiService {
  constructor(
    @InjectRepository(VatNuoi)
    private VatNuoiResposity: Repository<VatNuoi>,
  ) { }
  async create(createVatNuoiDto: CreateVatNuoiDto) {
    try {
      let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createVatNuoiDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      let createVatNuoi = await this.VatNuoiResposity.save(createVatNuoiDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createVatNuoi
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    try {
      let cropAll = await this.VatNuoiResposity.find()
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
    return this.VatNuoiResposity.findOne({ where: { id: id } });
  }
  async getOne(id: number) {
    try {
      let vatNuoiOne = await this.findOne(id)
      if (!vatNuoiOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy",
          data: vatNuoiOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: vatNuoiOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateVatNuoiDto: UpdateVatNuoiDto) {
    try {
      let vatNuoiOne = await this.findOne(id)
      if (!vatNuoiOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: vatNuoiOne
        })
      } else {
        let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateVatNuoiDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        await this.VatNuoiResposity.update(id, updateVatNuoiDto)
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

  async deleteVatNuoi(id: number) {
    try {
      let vatNuoiOne = await this.findOne(id)
      if (!vatNuoiOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: vatNuoiOne
        })
      } else {
        await this.VatNuoiResposity.delete(id)
        return resultData({
          statusCode: 200,
          message: "Xóa thành công",
        })
      }
    } catch (e) {
      if (e.errno === 1451) {
        return resultData({
          statusCode: 400,
          message: "Bạn không thể xóa vì có ràng buộc khóa ngoại. Hãy xóa dữ liệu có liên kết",
        })
      }
      console.log(e)
    }
  }
}
