import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SetWalletDto } from './setwallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  setWalletAddress(@Request() req, @Body() body: SetWalletDto) {
    return this.walletService.setWalletAddress(req.user.email, body.wallet);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteWalletAddress(@Request() req) {
    return this.walletService.deleteWalletAddress(req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getWalletAddress(@Request() req) {
    return this.walletService.getWalletAddress(req.user.email);
  }
}
