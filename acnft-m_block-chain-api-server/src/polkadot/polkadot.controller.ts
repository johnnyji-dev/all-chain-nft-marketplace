import { Controller, Get } from '@nestjs/common';
import { PolkadotService } from './polkadot.service';

@Controller('polkadot')
export class PolkadotController {
    constructor(private readonly polkadotService: PolkadotService) {}

    @Get()
    home(): string {
        return 'Welcome To DOT page!';
    }

    @Get('block')
    getblock() {
        return this.polkadotService.getLatestBlockNumber();
    }
}