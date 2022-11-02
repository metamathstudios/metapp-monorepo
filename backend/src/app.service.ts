import { Injectable, BadRequestException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { isAddress } from './utils/web3';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}

  getInfo(): string {
    return 'This is a Protected Route.';
  }
}
