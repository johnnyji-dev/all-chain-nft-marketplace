import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IconService from 'icon-sdk-js';
const { HttpProvider } = IconService;

@Injectable()
export class IconicxService {
    constructor(private readonly configService: ConfigService) { };

    async getLatestBlockNumber() {
        const endpoint = this.configService.get<string>('ICX_FNS_EP');
        const httpProvider = new HttpProvider(endpoint);
        const iconService = new IconService(httpProvider);

        // Returns block information
        const res = await iconService.getLastBlock().execute();
        return res.height;
    }
}
