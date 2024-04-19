import { Injectable } from '@nestjs/common';
import { CreateVungChanNuoiAnToanDto } from './dto/create-vung-chan-nuoi-an-toan.dto';
import { UpdateVungChanNuoiAnToanDto } from './dto/update-vung-chan-nuoi-an-toan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VungChanNuoiAnToan } from './entities/vung-chan-nuoi-an-toan.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class VungChanNuoiAnToanService {
  constructor(
    @InjectRepository(VungChanNuoiAnToan)
    private VungChanNuoiAnToanResposity: Repository<VungChanNuoiAnToan>,
    private administrativeUnitService: AdministrativeUnitService,
    private vatNuoiService: VatNuoiService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createVungChanNuoiAnToanDto: CreateVungChanNuoiAnToanDto) {
    try {
      let { administrativeUnitId, vatNuoiId, kyBaoCaoId, ...Info } = createVungChanNuoiAnToanDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['name', 'diaChi', 'quyMo', 'moTa', 'ngayChungNhan', 'administrativeUnitId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createVungChanNuoiAnToanDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!administrativeUnit || !vatNuoi || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại administrativeUnitId, kyBaoCaoId hoặc vatNuoiId",
          data: null
        })
      } if (createVungChanNuoiAnToanDto.toaDo) {
        const toaDoString = createVungChanNuoiAnToanDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.VungChanNuoiAnToanResposity.create({ administrativeUnit, vatNuoi, kyBaoCao, ...Info });
      let createVungCN = await this.VungChanNuoiAnToanResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createVungCN
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.VungChanNuoiAnToanResposity.find({ relations: ['administrativeUnit', 'vatNuoi', 'kyBaoCao'] })
    })
  }
  async findOne(id: number) {
    return await this.VungChanNuoiAnToanResposity.findOne({ where: { id: id }, relations: ['administrativeUnit', 'vatNuoi', 'kyBaoCao'] });
  }
  async getOne(id: number) {
    try {
      let vungAnToanOne = await this.findOne(id)
      if (!vungAnToanOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: vungAnToanOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateVungChanNuoiAnToanDto: UpdateVungChanNuoiAnToanDto) {
    try {
      let vungAnToanOne = await this.findOne(id)
      if (!vungAnToanOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { administrativeUnitId, vatNuoiId, kyBaoCaoId, ...Info } = updateVungChanNuoiAnToanDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['name', 'diaChi', 'quyMo', 'moTa', 'ngayChungNhan', 'administrativeUnitId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateVungChanNuoiAnToanDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!administrativeUnit || !vatNuoi || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại administrativeUnitId, kyBaoCaoId hoặc vatNuoiId",
            data: null
          })
        } if (updateVungChanNuoiAnToanDto.toaDo) {
          const toaDoString = updateVungChanNuoiAnToanDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.VungChanNuoiAnToanResposity.update(id, { administrativeUnit, vatNuoi, kyBaoCao, ...Info });
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

  async deleteVungAnToan(id: number) {
    try {
      let vungAnToanOne = await this.findOne(id)
      if (!vungAnToanOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: vungAnToanOne
        })
      } else {
        await this.VungChanNuoiAnToanResposity.delete(id)
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
