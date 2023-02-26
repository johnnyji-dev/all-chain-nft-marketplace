import { Controller, Get } from '@nestjs/common';
import { EthereumService } from './ethereum.service';

@Controller('ethereum')
export class EthereumController {
    constructor(private readonly ethereumService: EthereumService) {}

    @Get()
    home(): string {
        return 'Welcome To ETH page!';
    }

    @Get('block')
    getblock() {
        return this.ethereumService.getLatestBlockNumber();
    }
}
