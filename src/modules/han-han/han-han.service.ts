import { Injectable } from '@nestjs/common';
import { CreateHanHanDto } from './dto/create-han-han.dto';
import { UpdateHanHanDto } from './dto/update-han-han.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HanHan } from './entities/han-han.entity';
import { Repository } from 'typeorm';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class HanHanService {
  constructor(
    @InjectRepository(HanHan)
    private HanHanResposity: Repository<HanHan>,
    private cropTypeService: CropTypeService,
    private administrativeUnitService: AdministrativeUnitService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createHanHanDto: CreateHanHanDto) {
    try {
      let { cropTypeId, administrativeUnitId, kyBaoCaoId, ...Info } = createHanHanDto;
      let cropType = await this.cropTypeService.findOne(cropTypeId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['diaChi', 'dienTich', 'ngayGhiNhan', 'cropTypeId', 'administrativeUnitId', 'kyBaoCaoId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createHanHanDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!cropType || !administrativeUnit || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
          data: null
        })
      } if (createHanHanDto.toaDo) {
        const toaDoString = createHanHanDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.HanHanResposity.create({ cropType, administrativeUnit, kyBaoCao, ...Info });
      let createHanHan = await this.HanHanResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createHanHan
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.HanHanResposity.find({ relations: ['cropType', 'administrativeUnit', 'kyBaoCao'] })
    })
  }

  async findOne(id: number) {
    return await this.HanHanResposity.findOne({ where: { id: id }, relations: ['cropType', 'administrativeUnit', 'kyBaoCao'] });
  }

  async getOne(id: number) {
    try {
      let hanHanOne = await this.findOne(id)
      if (!hanHanOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: hanHanOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  async update(id: number, updateHanHanDto: UpdateHanHanDto) {
    try {
      let hanHanOne = await this.findOne(id)
      if (!hanHanOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { cropTypeId, administrativeUnitId, kyBaoCaoId, ...Info } = updateHanHanDto;
        let cropType = await this.cropTypeService.findOne(cropTypeId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['diaChi', 'dienTich', 'ngayGhiNhan', 'cropTypeId', 'administrativeUnitId', 'kyBaoCaoId', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateHanHanDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        if (!cropType || !administrativeUnit || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
            data: null
          })
        } if (updateHanHanDto.toaDo) {
          const toaDoString = updateHanHanDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
          await this.HanHanResposity.update(id, { ...Info, cropType, administrativeUnit, kyBaoCao });
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

  async deleteHanHan(id: number) {
    try {
      let hanHanOne = await this.findOne(id)
      if (!hanHanOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: hanHanOne
        })
      } else {
        await this.HanHanResposity.delete(id)
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
