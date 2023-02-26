import { Module } from '@nestjs/common';
import { IconicxController } from './iconicx.controller';
import { IconicxService } from './iconicx.service';

@Module({
  controllers: [IconicxController],
  providers: [IconicxService]
})
export class IconicxModule {}
