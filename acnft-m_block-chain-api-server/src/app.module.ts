import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EthereumModule } from './ethereum/ethereum.module';
import { BandprotocolModule } from './bandprotocol/bandprotocol.module';
import { NearprotocolModule } from './nearprotocol/nearprotocol.module';

@Module({
  imports: [EthereumModule, BandprotocolModule, NearprotocolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
