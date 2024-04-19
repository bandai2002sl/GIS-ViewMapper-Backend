import { Injectable } from '@nestjs/common';
import { CreateDienTichTuoiTieuDto } from './dto/create-dien-tich-tuoi-tieu.dto';
import { UpdateDienTichTuoiTieuDto } from './dto/update-dien-tich-tuoi-tieu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DienTichTuoiTieu } from './entities/dien-tich-tuoi-tieu.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CropTypeService } from '../crop-type/crop-type.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class DienTichTuoiTieuService {
  constructor(
    @InjectRepository(DienTichTuoiTieu)
    private stuoiTieuResposity: Repository<DienTichTuoiTieu>,
    private administrativeUnitService: AdministrativeUnitService,
    private cropTypeService: CropTypeService
  ) { }

  async create(createDienTichTuoiTieuDto: CreateDienTichTuoiTieuDto) {
    try {
      let { administrativeUnitId, cropTypeId, ...Info } = createDienTichTuoiTieuDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let cropType = await this.cropTypeService.findOne(cropTypeId);
      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
          data: null
        })
      } else if (!cropType) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy loại cây trồng nào có id = " + cropTypeId,
          data: null
        })
      }
      if (createDienTichTuoiTieuDto.toaDo) {
        const toaDoString = createDienTichTuoiTieuDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.stuoiTieuResposity.create({ administrativeUnit, cropType, ...Info });
      let cong = await this.stuoiTieuResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "Thêm mới thành công",
        data: cong
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "Thành công",
      data: await this.stuoiTieuResposity.find({ relations: ['administrativeUnit', 'cropType'] })
    })
  }

  async findOne(id: number) {
    return await this.stuoiTieuResposity.findOne({ where: { id: id }, relations: ['administrativeUnit', 'cropType'] });
  }

  async getOne(id: number) {
    try {
      let stuoiTieu = await this.findOne(id);
      if (!stuoiTieu) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: stuoiTieu
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateDienTichTuoiTieuDto: UpdateDienTichTuoiTieuDto) {
    try {
      let cong = await this.findOne(id)
      if (!cong) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
        })
      } else {
        let { administrativeUnitId, cropTypeId, ...Info } = updateDienTichTuoiTieuDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let cropType = await this.cropTypeService.findOne(cropTypeId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy đơn vị hành chính có id= " + administrativeUnitId,
          })
        } else if (!cropType) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy cây trồng có id= " + cropType,
          })
        }
        if (updateDienTichTuoiTieuDto.toaDo) {
          const toaDoString = updateDienTichTuoiTieuDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.stuoiTieuResposity.update(id, { ...Info, administrativeUnit, cropType });
        return resultData({
          statusCode: 200,
          message: 'Sửa Thành công',
          data: await this.findOne(id)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async remove(id: number) {
    try {
      let stuoiTieu = await this.findOne(id)
      if (!stuoiTieu) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
        })
      } else {
        await this.stuoiTieuResposity.delete(id)
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
