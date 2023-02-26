import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EthereumModule } from './ethereum/ethereum.module';
import { BandprotocolModule } from './bandprotocol/bandprotocol.module';
import { NearprotocolModule } from './nearprotocol/nearprotocol.module';
import { ConfigModule } from '@nestjs/config';
import { BnbModule } from './bnb/bnb.module';
import { PolkadotModule } from './polkadot/polkadot.module';
import { IconicxModule } from './iconicx/iconicx.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    // load: [config],
  }), EthereumModule, BnbModule, PolkadotModule, NearprotocolModule, BandprotocolModule, IconicxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
