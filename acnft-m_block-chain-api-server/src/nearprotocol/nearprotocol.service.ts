import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { connect } from 'near-api-js';

@Injectable()
export class NearprotocolService {
    constructor(private readonly configService: ConfigService) {};

    async getLatestBlockNumber() {
        const endpoint = this.configService.get<string>('NEAR_FNS_EP');
        const nearNode = await connect({
            networkId: 'testnet',
            nodeUrl: endpoint
        });

        const res = await nearNode.connection.provider.block({
            finality: "final",
        });

        return res.header.height;
    }
}
