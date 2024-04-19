import { Injectable } from '@nestjs/common';
import { CreateCoSoKinhDoanhDto } from './dto/create-co-so-kinh-doanh.dto';
import { UpdateCoSoKinhDoanhDto } from './dto/update-co-so-kinh-doanh.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoSoKinhDoanh } from './entities/co-so-kinh-doanh.entity';
import { Repository } from 'typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { LoaiKinhDoanhService } from '../loai-kinh-doanh/loai-kinh-doanh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class CoSoKinhDoanhService {
  constructor(
    @InjectRepository(CoSoKinhDoanh)
    private CoSoKinhDoanhResposity: Repository<CoSoKinhDoanh>,
    private caNhanHtxService: CaNhanHtxService,
    private loaiKinhDoanhService: LoaiKinhDoanhService,
    private administrativeUnitService: AdministrativeUnitService,
  ) { }
  async create(createCoSoKinhDoanhDto: CreateCoSoKinhDoanhDto) {
    try {
      let { caNhanHtxId, loaiKinhDoanhId, administrativeUnitId, ...Info } = createCoSoKinhDoanhDto;
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
      let loaiKinhDoanh = await this.loaiKinhDoanhService.findOne(loaiKinhDoanhId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      let arrInput = ['diaDiem', 'hinhAnh', 'dangKyKinhDoanh', 'sdt', 'trangThai', 'caNhanHtxId', 'loaiKinhDoanhId', 'administrativeUnitId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createCoSoKinhDoanhDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      if (!caNhanHtx || !administrativeUnit || !loaiKinhDoanh) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId loaiKinhDoanhId donvihanhchinhId",
          data: null
        })
      } if (createCoSoKinhDoanhDto.toaDo) {
        const toaDoString = createCoSoKinhDoanhDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.CoSoKinhDoanhResposity.create({ caNhanHtx, loaiKinhDoanh, administrativeUnit, ...Info });
      let createCSKD = await this.CoSoKinhDoanhResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createCSKD
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.CoSoKinhDoanhResposity.find({ relations: ['caNhanHtx', 'loaiKinhDoanh', 'administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.CoSoKinhDoanhResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'loaiKinhDoanh', 'administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let coSoKNOne = await this.findOne(id)
      if (!coSoKNOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: coSoKNOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateCoSoKinhDoanhDto: UpdateCoSoKinhDoanhDto) {
    try {
      let coSoKNOne = await this.findOne(id)
      if (!coSoKNOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, loaiKinhDoanhId, administrativeUnitId, ...Info } = updateCoSoKinhDoanhDto;
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
        let loaiKinhDoanh = await this.loaiKinhDoanhService.findOne(loaiKinhDoanhId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

        let arrInput = ['diaDiem', 'hinhAnh', 'dangKyKinhDoanh', 'sdt', 'trangThai', 'caNhanHtxId', 'loaiKinhDoanhId', 'administrativeUnitId', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateCoSoKinhDoanhDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        if (!caNhanHtx || !administrativeUnit || !loaiKinhDoanh) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId loaiKinhDoanhId donvihanhchinhId",
            data: null
          })
        } if (updateCoSoKinhDoanhDto.toaDo) {
          const toaDoString = updateCoSoKinhDoanhDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.CoSoKinhDoanhResposity.update(id, { caNhanHtx, loaiKinhDoanh, administrativeUnit, ...Info });
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
  async deleteCoSoKD(id: number) {
    try {
      let coSoKNOne = await this.findOne(id)
      if (!coSoKNOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: coSoKNOne
        })
      } else {
        await this.CoSoKinhDoanhResposity.delete(id)
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
