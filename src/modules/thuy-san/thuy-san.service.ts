import { Injectable } from '@nestjs/common';
import { CreateThuySanDto } from './dto/create-thuy-san.dto';
import { UpdateThuySanDto } from './dto/update-thuy-san.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ThuySan } from './entities/thuy-san.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class ThuySanService {
  constructor(
    @InjectRepository(ThuySan)
    private ThuySanResposity: Repository<ThuySan>,
  ) { }
  async create(createThuySanDto: CreateThuySanDto) {
    try {
      let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createThuySanDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      let createThuySan = await this.ThuySanResposity.save(createThuySanDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createThuySan
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    try {
      let tsAll = await this.ThuySanResposity.find()
      return resultData({
        statusCode: 200,
        message: "thành công",
        data: tsAll
      })
    } catch (e) {
      console.log(e)
    }
  }
  async findOne(id: number) {
    return this.ThuySanResposity.findOne({ where: { id: id } });
  }
  async getOne(id: number) {
    try {
      let ThuySanOne = await this.findOne(id);
      if (!ThuySanOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy",
          data: null,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: ThuySanOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateThuySanDto: UpdateThuySanDto) {
    try {
      let ThuySanOne = await this.findOne(id)
      if (!ThuySanOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: ThuySanOne
        })
      } else {
        let {...Info} = updateThuySanDto;
        await this.ThuySanResposity.update(id, {...Info})
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

  async deleteThuySan(id: number) {
    try {
      let ThuySanOne = await this.findOne(id)
      if (!ThuySanOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: ThuySanOne
        })
      } else {
        await this.ThuySanResposity.delete(id)
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