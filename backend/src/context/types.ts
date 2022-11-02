import { Roles } from '@prisma/client';

export interface IPayload {
  sub: string;
  name: string;
  email: string;
  wallets: string[];
  roles: Roles[];
}
