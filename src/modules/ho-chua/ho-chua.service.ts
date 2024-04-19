import { Injectable } from '@nestjs/common';
import { CreateHoChuaDto } from './dto/create-ho-chua.dto';
import { UpdateHoChuaDto } from './dto/update-ho-chua.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { HoChua } from './entities/ho-chua.entity';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class HoChuaService {
  constructor(
    @InjectRepository(HoChua)
    private hoChuaResposity: Repository<HoChua>,
    private administrativeUnitService: AdministrativeUnitService
  ) { }
  async create(createHoChuaDto: CreateHoChuaDto) {
    try {
      let { administrativeUnitId, ...Info } = createHoChuaDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
          data: null
        })
      } 
      if (createHoChuaDto.toaDo) {
        const toaDoString = createHoChuaDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.hoChuaResposity.create({ administrativeUnit, ...Info });
      let hoChua = await this.hoChuaResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "Thêm mới thành công",
        data: hoChua
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "Thành công",
      data: await this.hoChuaResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.hoChuaResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let hoChua = await this.findOne(id);
      if (!hoChua) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: hoChua
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateHoChuaDto: UpdateHoChuaDto) {
    try {
      let hoChua = await this.findOne(id)
      if (!hoChua) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
        })
      } else {
        let { administrativeUnitId, ...Info } = updateHoChuaDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
          })
        } 
        if (updateHoChuaDto.toaDo) {
          const toaDoString = updateHoChuaDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.hoChuaResposity.update(id, { ...Info, administrativeUnit });
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
      let hoChua = await this.findOne(id)
      if (!hoChua) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id = " + id,
        })
      } else {
        await this.hoChuaResposity.delete(id)
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
