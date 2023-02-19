import { Module } from '@nestjs/common';
import { NearprotocolController } from './nearprotocol.controller';
import { NearprotocolService } from './nearprotocol.service';

@Module({
  controllers: [NearprotocolController],
  providers: [NearprotocolService]
})
export class NearprotocolModule {}
