import { Injectable } from '@nestjs/common';
import { CreateCoSoChanNuoiDto } from './dto/create-co-so-chan-nuoi.dto';
import { UpdateCoSoChanNuoiDto } from './dto/update-co-so-chan-nuoi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoSoChanNuoi } from './entities/co-so-chan-nuoi.entity';
import { Repository } from 'typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { HinhThucChanNuoiService } from '../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.service';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';


@Injectable()
export class CoSoChanNuoiService {
  constructor(
    @InjectRepository(CoSoChanNuoi)
    private CoSoChanNuoiResposity: Repository<CoSoChanNuoi>,
    private caNhanHtxService: CaNhanHtxService,
    private vatNuoiService: VatNuoiService,
    private hinhThucChanNuoiService: HinhThucChanNuoiService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createCoSoChanNuoiDto: CreateCoSoChanNuoiDto) {
    try {
      let { caNhanHtxId, vatNuoiIds, kyBaoCaoId, hinhThucChanNuoiId, tinhTrang, diaChi, toaDo, icon } = createCoSoChanNuoiDto;
      const coSoChanNuoi = new CoSoChanNuoi();
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
      let hinhThucChanNuoi = await this.hinhThucChanNuoiService.findOne(hinhThucChanNuoiId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['tinhTrang', 'diaChi', 'toaDo', 'icon', 'caNhanHtxId', 'hinhThucChanNuoiId', 'kyBaoCaoId'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createCoSoChanNuoiDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!vatNuoiIds || vatNuoiIds.length === 0) {
        return resultData({
          statusCode: 400,
          message: "Bạn chưa nhập trường: vatNuoiIds",
        });
      }
      if (!caNhanHtx || !hinhThucChanNuoi || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId và hinhThucChanNuoiId",
          data: null
        })
      } if (createCoSoChanNuoiDto.toaDo) {
        const toaDoString = createCoSoChanNuoiDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      coSoChanNuoi.vatNuoi = [];
      for (const vatNuoiId of vatNuoiIds) {
        const vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
        if (!vatNuoi) {
          return resultData({
            statusCode: 400,
            message: `không tìm thấy! Vui lòng kiểm tra lại các vatNuoiId `,
            data: null
          })
        } else if (vatNuoi) {
          coSoChanNuoi.vatNuoi.push(vatNuoi);
        }
      }
      coSoChanNuoi.tinhTrang = tinhTrang;
      coSoChanNuoi.diaChi = diaChi;
      coSoChanNuoi.toaDo = toaDo;
      coSoChanNuoi.icon = icon;
      coSoChanNuoi.hinhThucChanNuoi = hinhThucChanNuoi;
      coSoChanNuoi.caNhanHtx = caNhanHtx;
      coSoChanNuoi.kyBaoCao = kyBaoCao;
      let createCoSoCN = await this.CoSoChanNuoiResposity.save(coSoChanNuoi);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createCoSoCN
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.CoSoChanNuoiResposity.find({ relations: ['caNhanHtx', 'vatNuoi', 'hinhThucChanNuoi', 'kyBaoCao'] })
    })
  }

  async findOne(id: number) {
    return await this.CoSoChanNuoiResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'vatNuoi', 'hinhThucChanNuoi', 'kyBaoCao'] });
  }

  async getOne(id: number) {
    try {
      let coSoOne = await this.findOne(id)
      if (!coSoOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: coSoOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateCoSoChanNuoiDto: UpdateCoSoChanNuoiDto) {
    try {
      let coSoOne = await this.findOne(id)
      if (!coSoOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, vatNuoiIds, hinhThucChanNuoiId, kyBaoCaoId, tinhTrang, diaChi, toaDo, icon } = updateCoSoChanNuoiDto;
        const coSoChanNuoi = new CoSoChanNuoi();
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
        let hinhThucChanNuoi = await this.hinhThucChanNuoiService.findOne(hinhThucChanNuoiId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['tinhTrang', 'diaChi', 'toaDo', 'icon', 'caNhanHtxId', 'hinhThucChanNuoiId', 'kyBaoCaoId'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateCoSoChanNuoiDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!vatNuoiIds || vatNuoiIds.length === 0) {
          return resultData({
            statusCode: 400,
            message: "Bạn chưa nhập trường: vatNuoiIds",
          });
        }
        if (!caNhanHtx || !hinhThucChanNuoi || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId và hinhThucChanNuoiId",
            data: null
          })
        } if (updateCoSoChanNuoiDto.toaDo) {
          const toaDoString = updateCoSoChanNuoiDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        coSoChanNuoi.vatNuoi = [];
        for (const vatNuoiId of vatNuoiIds) {
          const vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
          if (!vatNuoi) {
            return resultData({
              statusCode: 400,
              message: `không tìm thấy! Vui lòng kiểm tra lại các vatNuoiIds `,
              data: null
            })
          } else if (vatNuoi) {
            coSoChanNuoi.vatNuoi.push(vatNuoi);
          }
        }
        coSoChanNuoi.id = id;
        coSoChanNuoi.hinhThucChanNuoi = hinhThucChanNuoi;
        coSoChanNuoi.caNhanHtx = caNhanHtx;
        coSoChanNuoi.kyBaoCao = kyBaoCao;
        coSoChanNuoi.tinhTrang = tinhTrang;
        coSoChanNuoi.diaChi = diaChi;
        coSoChanNuoi.toaDo = toaDo;
        coSoChanNuoi.icon = icon;
        await this.CoSoChanNuoiResposity.save(coSoChanNuoi)
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

  async deleteCoSoCN(id: number) {
    try {
      let coSoOne = await this.findOne(id)
      if (!coSoOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: coSoOne
        })
      } else {
        await this.CoSoChanNuoiResposity.delete(id)
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