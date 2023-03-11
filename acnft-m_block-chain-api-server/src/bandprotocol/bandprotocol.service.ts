import { Client } from '@bandprotocol/bandchain.js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BandprotocolService {
    constructor(private readonly configService: ConfigService) {};

    async getLatestBlockNumber() {
        const endpoint = this.configService.get<string>('BAND_FNS_EP');
        const client = new Client(endpoint);

        const res = await client.getLatestBlock();

        return res.block.header.height;
    }
}