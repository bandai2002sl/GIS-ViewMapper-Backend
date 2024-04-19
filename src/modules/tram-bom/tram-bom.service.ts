import { Injectable } from '@nestjs/common';
import { CreateTramBomDto } from './dto/create-tram-bom.dto';
import { UpdateTramBomDto } from './dto/update-tram-bom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { TramBom } from './entities/tram-bom.entity';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class TramBomService {
  constructor(
    @InjectRepository(TramBom)
    private tramBomResposity: Repository<TramBom>,
    private administrativeUnitService: AdministrativeUnitService
  ) { }
  async create(createTramBomDto: CreateTramBomDto) {
    try {
      let { administrativeUnitId, ...Info } = createTramBomDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
          data: null
        })
      } if (createTramBomDto.toaDo) {
        const toaDoString = createTramBomDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.tramBomResposity.create({ administrativeUnit, ...Info });
      let tramBom = await this.tramBomResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "Thêm mới thành công",
        data: tramBom
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "Thành công",
      data: await this.tramBomResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.tramBomResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let tramBom = await this.findOne(id);
      if (!tramBom) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: tramBom
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateTramBomDto: UpdateTramBomDto) {
    try {
      let cong = await this.findOne(id)
      if (!cong) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
        })
      } else {
        let { administrativeUnitId, ...Info } = updateTramBomDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
          })
        } else {
          await this.tramBomResposity.update(id, { ...Info, administrativeUnit });
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

  async remove(id: number) {
    try {
      let tramBom = await this.findOne(id)
      if (!tramBom) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
        })
      } else {
        await this.tramBomResposity.delete(id)
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
