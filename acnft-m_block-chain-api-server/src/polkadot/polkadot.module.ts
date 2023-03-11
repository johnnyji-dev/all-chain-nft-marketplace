import { Module } from '@nestjs/common';
import { PolkadotController } from './polkadot.controller';
import { PolkadotService } from './polkadot.service';

@Module({
  controllers: [PolkadotController],
  providers: [PolkadotService]
})
export class PolkadotModule {}
