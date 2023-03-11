import { Module } from '@nestjs/common';
import { BandprotocolController } from './bandprotocol.controller';
import { BandprotocolService } from './bandprotocol.service';

@Module({
  controllers: [BandprotocolController],
  providers: [BandprotocolService]
})
export class BandprotocolModule {}
