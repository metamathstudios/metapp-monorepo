import { Injectable, BadRequestException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { isAddress } from '../utils/web3';

@Injectable()
export class WalletService {
  constructor(private readonly usersService: UsersService) {}

  // set wallet address using prisma
  async setWalletAddress(email: string, walletAddress: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (!isAddress(walletAddress)) {
      throw new BadRequestException('Invalid wallet address');
    }

    const res = await this.usersService.prismaService.user
      .findUnique({
        where: { email },
      })
      .then((user) => {
        return user.wallets;
      })
      .catch((err) => {
        throw new Error(err);
      });

      const data = await this.usersService.prismaService.user
      .update({
        where: { email },
        data: { wallets: [...res, walletAddress] },
      })
      .then((user) => {
        return user.wallets;
      })
      .catch((err) => {
        throw new Error(err);
      });
      
    return { status: HttpStatus.OK, data: [data] };
  }

  // delete wallet address using prisma
  async deleteWalletAddress(email: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const data = await this.usersService.prismaService.user
      .update({
        where: { email },
        data: { wallets: [] },
      })
      .then((user) => {
        return user.wallets;
      })
      .catch((err) => {
        throw new Error(err);
      });

    return { status: HttpStatus.OK, data: 'Wallet Address Deleted' };
  }

  // get wallet address using prisma
  async getWalletAddress(email: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const data = await this.usersService.prismaService.user
      .findUnique({
        where: { email },
      })
      .then((user) => {
        return user.wallets;
      })
      .catch((err) => {
        throw new Error(err);
      });

    return { status: HttpStatus.OK, data: data };
  }
}
