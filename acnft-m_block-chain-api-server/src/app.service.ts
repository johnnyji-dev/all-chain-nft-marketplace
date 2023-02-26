import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ALL-CHAIN-NFT-MARKETPLACE Block-Chain-Api-Server!';
  }
}
