import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateAssetDto } from './createasset.dto';
import { DeleteAssetDto } from './deleteasset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetService: AssetsService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  createAsset(@Request() req, @Body() body: CreateAssetDto) {
    return this.assetService.createAsset(body, req.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAsset(@Request() req, @Body() body: DeleteAssetDto) {
    return this.assetService.deleteAsset(body.address, body.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAssets(@Request() req) {
    return this.assetService.findAssetByUser(req.user.email);
  }
}