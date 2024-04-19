import { Injectable } from '@nestjs/common';
import { CreateCropTypeDto } from './dto/create-crop-type.dto';
import { UpdateCropTypeDto } from './dto/update-crop-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CropType } from './entities/crop-type.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class CropTypeService {
  constructor(
    @InjectRepository(CropType)
    private CropTyeResposity: Repository<CropType>,
  ) { }
  async create(createCropTypeDto: CreateCropTypeDto) {
    try {
      let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createCropTypeDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      let createNewCrop = await this.CropTyeResposity.save(createCropTypeDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createNewCrop
      })
    } catch (e) {
      console.log(e)
    }
  }

  async getAll() {
    try {
      let cropAll = await this.CropTyeResposity.find()
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
    return this.CropTyeResposity.findOne({ where: { id: id } });
  }
  async getOne(id: number) {
    try {
      let cropOne = await this.findOne(id)
      if (!cropOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy cây trồng",
          data: cropOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: cropOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async editCrop(id: number, updateCropTypeDto: UpdateCropTypeDto) {
    try {
      let crop = await this.findOne(id)
      if (!crop) {
        return resultData({
          statusCode: 400,
          message: "Cay trồng không tồn tại",
          data: crop
        })
      } else {
        let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateCropTypeDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        await this.CropTyeResposity.update(id, updateCropTypeDto)
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

  async deleteCrop(id: number) {
    try {
      let crop = await this.findOne(id)
      if (!crop) {
        return resultData({
          statusCode: 400,
          message: "Cay trồng không tồn tại",
          data: crop
        })
      } else {
        await this.CropTyeResposity.delete(id)
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
