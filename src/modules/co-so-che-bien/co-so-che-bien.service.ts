import { Injectable } from '@nestjs/common';
import { CreateCoSoCheBienDto } from './dto/create-co-so-che-bien.dto';
import { UpdateCoSoCheBienDto } from './dto/update-co-so-che-bien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoSoCheBien } from './entities/co-so-che-bien.entity';
import { Repository } from 'typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class CoSoCheBienService {
  constructor(
    @InjectRepository(CoSoCheBien)
    private CoSoCheBienResposity: Repository<CoSoCheBien>,
    private caNhanHtxService: CaNhanHtxService,
    private administrativeUnitService: AdministrativeUnitService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createCoSoCheBienDto: CreateCoSoCheBienDto) {
    try {
      let { caNhanHtxId, administrativeUnitId, kyBaoCaoId, ...Info } = createCoSoCheBienDto;
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['diaChi', 'loaiCheBien', 'moTa', 'hinhAnh', 'trangThai', 'caNhanHtxId', 'administrativeUnitId', 'kyBaoCaoId', 'CoGCNATTP', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createCoSoCheBienDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!caNhanHtx || !administrativeUnit || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc donvihanhchinhId",
          data: null
        })
      } if (createCoSoCheBienDto.toaDo) {
        const toaDoString = createCoSoCheBienDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.CoSoCheBienResposity.create({ caNhanHtx, administrativeUnit, kyBaoCao, ...Info });
      let createCheBien = await this.CoSoCheBienResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createCheBien
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.CoSoCheBienResposity.find({ relations: ['caNhanHtx', 'administrativeUnit', 'kyBaoCao'] })
    })
  }
  async findOne(id: number) {
    return await this.CoSoCheBienResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'administrativeUnit', 'kyBaoCao'] });
  }

  async getOne(id: number) {
    try {
      let cheBienOne = await this.findOne(id)
      if (!cheBienOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: cheBienOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateCoSoCheBienDto: UpdateCoSoCheBienDto) {
    try {
      let cheBienOne = await this.findOne(id)
      if (!cheBienOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, administrativeUnitId, kyBaoCaoId, ...Info } = updateCoSoCheBienDto;
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['diaChi', 'loaiCheBien', 'moTa', 'hinhAnh', 'trangThai', 'caNhanHtxId', 'administrativeUnitId', 'kyBaoCaoId', 'CoGCNATTP', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateCoSoCheBienDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!caNhanHtx || !administrativeUnit || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
            data: null
          })
        } if (updateCoSoCheBienDto.toaDo) {
          const toaDoString = updateCoSoCheBienDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.CoSoCheBienResposity.update(id, { ...Info, caNhanHtx, administrativeUnit, kyBaoCao });
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

  async deleteCheBien(id: number) {
    try {
      let cheBienOne = await this.findOne(id)
      if (!cheBienOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: cheBienOne
        })
      } else {
        await this.CoSoCheBienResposity.delete(id)
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
