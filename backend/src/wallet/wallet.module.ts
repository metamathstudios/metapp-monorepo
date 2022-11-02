import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';

@Module({
  imports: [forwardRef(() => AuthModule), PrismaModule],
  providers: [UsersService, WalletService, AppService],
  exports: [WalletService],
  controllers: [WalletController],
})
export class WalletModule {}
