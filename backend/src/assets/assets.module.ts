import { Module, forwardRef } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';
import { AssetsController } from './assets.controller';

@Module({
  imports: [forwardRef(() => AuthModule), PrismaModule],
  providers: [UsersService, AssetsService, AppService],
  exports: [AssetsService],
  controllers: [AssetsController]
})
export class AssetsModule {}
