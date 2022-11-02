import { Injectable, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateAssetDto } from './createasset.dto';
import { oslink } from 'src/utils/constants';
import { DeleteAssetDto } from './deleteasset.dto';

@Injectable()
export class AssetsService {
  constructor(private readonly usersService: UsersService) { }

  async createAsset(data: CreateAssetDto, email: string) {
    const user = await this.usersService.findByEmail(email);

    const asset = await this.usersService.prismaService.asset.create({
      data: {
        ...data,
        qr_code: `${oslink[data.network]}${data.address_id}`,
        userId: user.id,
      },
    });
    return asset;
  }

  async findAssetByUser(email: string) {
    const user = await this.usersService.findByEmail(email);
    const auths = await this.usersService.prismaService.asset.findMany({
      where: { userId: user.id },
    });
    return { status: HttpStatus.OK, data: auths };
  }

  async deleteAsset(address: string, id: string) {


    const auths = await this.usersService.prismaService.asset.findMany({
      where: { address_id: `${address}/${id}` },
    });
    return { status: HttpStatus.OK, data: auths };
  }
}
