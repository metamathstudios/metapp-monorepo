import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { WalletModule } from './wallet/wallet.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule, WalletModule, AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
