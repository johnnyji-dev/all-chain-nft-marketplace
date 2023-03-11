import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Web3 from 'web3';

@Injectable()
export class EthereumService {
    constructor(private readonly configService: ConfigService) {};

    async getLatestBlockNumber() {
        const endpoint = this.configService.get<string>('ETH_FNS_EP');
        const web3 = new Web3(endpoint);

        return web3.eth.getBlockNumber();
    }
};