import { Controller, Get } from '@nestjs/common';
import { NearprotocolService } from './nearprotocol.service';

@Controller('nearprotocol')
export class NearprotocolController {
    constructor(private readonly nearprotocolService: NearprotocolService) {}

    @Get()
    home(): string {
        return 'Welcome To NEAR page!';
    }

    @Get('block')
    getblock() {
        return this.nearprotocolService.getLatestBlockNumber();
    }
}
