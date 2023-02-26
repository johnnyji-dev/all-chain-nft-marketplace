import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiPromise, WsProvider } from '@polkadot/api';

@Injectable()
export class PolkadotService {
    constructor(private readonly configService: ConfigService) { };

    async getLatestBlockNumber() {
        const endpoint = this.configService.get<string>('DOT_FNS_EP');
        // Initialise the provider to connect to the config node
        const provider = new WsProvider(endpoint);

        // Create the API and wait until ready
        const api = await ApiPromise.create({ provider });

        // no blockHash is specified, so we retrieve the latest
        return await (await api.rpc.chain.getBlock()).block.header.number;
    }
}
