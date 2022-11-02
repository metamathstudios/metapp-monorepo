import { Injectable } from '@nestjs/common';
import { genSalt, hash, compare } from 'bcrypt';

@Injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    const salt = await genSalt(10);
    return hash(password, salt);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
