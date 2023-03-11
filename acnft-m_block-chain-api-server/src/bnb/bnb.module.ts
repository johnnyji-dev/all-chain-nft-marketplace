import { Module } from '@nestjs/common';
import { BnbController } from './bnb.controller';
import { BnbService } from './bnb.service';

@Module({
  controllers: [BnbController],
  providers: [BnbService]
})
export class BnbModule {}
