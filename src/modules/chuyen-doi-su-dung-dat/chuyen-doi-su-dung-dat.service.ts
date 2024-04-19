import { Injectable } from '@nestjs/common';
import { CreateChuyenDoiSuDungDatDto } from './dto/create-chuyen-doi-su-dung-dat.dto';
import { UpdateChuyenDoiSuDungDatDto } from './dto/update-chuyen-doi-su-dung-dat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChuyenDoiSuDungDat } from './entities/chuyen-doi-su-dung-dat.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';
import { HinhThucChuyenDoiDatService } from '../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class ChuyenDoiSuDungDatService {
  constructor(
    @InjectRepository(ChuyenDoiSuDungDat)
    private ChuyenDoiSuDungDatResposity: Repository<ChuyenDoiSuDungDat>,
    private hinhThucChuyenDoiDatService: HinhThucChuyenDoiDatService,
    private administrativeUnitService: AdministrativeUnitService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createChuyenDoiSuDungDatDto: CreateChuyenDoiSuDungDatDto) {
    try {
      let { administrativeUnitId, hinhThucChuyenDoiDatId, kyBaoCaoId, ...Info } = createChuyenDoiSuDungDatDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let hinhThucChuyenDoiDat = await this.hinhThucChuyenDoiDatService.findOne(hinhThucChuyenDoiDatId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['moTa', 'diaChi', 'dienTich', 'ngayChuyenDoi', 'administrativeUnitId', 'hinhThucChuyenDoiDatId', 'kyBaoCaoId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createChuyenDoiSuDungDatDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!administrativeUnit || !hinhThucChuyenDoiDat || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId, kyBaoCaoId hoặc hinhThucChuyenDoiDatId",
        })
      } if (createChuyenDoiSuDungDatDto.toaDo) {
        const toaDoString = createChuyenDoiSuDungDatDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.ChuyenDoiSuDungDatResposity.create({ administrativeUnit, hinhThucChuyenDoiDat, kyBaoCao, ...Info });
      let createCDDat = await this.ChuyenDoiSuDungDatResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createCDDat
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.ChuyenDoiSuDungDatResposity.find({ relations: ['administrativeUnit', 'hinhThucChuyenDoiDat', 'kyBaoCao'] })
    })
  }

  async findOne(id: number) {
    return await this.ChuyenDoiSuDungDatResposity.findOne({ where: { id: id }, relations: ['administrativeUnit', 'hinhThucChuyenDoiDat', 'kyBaoCao'] });
  }

  async getOne(id: number) {
    try {
      let chuyenDoiDatOne = await this.findOne(id)
      if (!chuyenDoiDatOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: chuyenDoiDatOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateChuyenDoiSuDungDatDto: UpdateChuyenDoiSuDungDatDto) {
    try {
      let chuyenDoiDatOne = await this.findOne(id)
      if (!chuyenDoiDatOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { administrativeUnitId, hinhThucChuyenDoiDatId, kyBaoCaoId, ...Info } = updateChuyenDoiSuDungDatDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let hinhThucChuyenDoiDat = await this.hinhThucChuyenDoiDatService.findOne(hinhThucChuyenDoiDatId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['moTa', 'diaChi', 'dienTich', 'ngayChuyenDoi', 'administrativeUnitId', 'kyBaoCaoId', 'hinhThucChuyenDoiDatId', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateChuyenDoiSuDungDatDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!administrativeUnit || !hinhThucChuyenDoiDat || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId, kyBaoCaoId hoặc hinhThucChuyenDoiDatId",
            data: null
          })
        } if (updateChuyenDoiSuDungDatDto.toaDo) {
          const toaDoString = updateChuyenDoiSuDungDatDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.ChuyenDoiSuDungDatResposity.update(id, { ...Info, administrativeUnit, hinhThucChuyenDoiDat, kyBaoCao });
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

  async deleteChuyenDoiDat(id: number) {
    try {
      let chuyenDoiDatOne = await this.findOne(id)
      if (!chuyenDoiDatOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: chuyenDoiDatOne
        })
      } else {
        await this.ChuyenDoiSuDungDatResposity.delete(id)
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
