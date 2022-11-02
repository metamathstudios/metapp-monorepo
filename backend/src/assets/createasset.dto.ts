import { Network } from '@prisma/client';

export class CreateAssetDto {
  name: string;
  address_id: string;
  image: string;
  network: Network;
  expiration: string;
}
