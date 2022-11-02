import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IPayload } from 'src/context/types';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const isPassword = await this.passwordService.comparePassword(
      password,
      user.password,
    );

    if (user && isPassword) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload: IPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      wallets: user.wallets,
      roles: user.roles,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
