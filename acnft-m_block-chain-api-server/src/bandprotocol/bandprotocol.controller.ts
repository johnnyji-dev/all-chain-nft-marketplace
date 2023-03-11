import { Controller, Get } from '@nestjs/common';
import { BandprotocolService } from './bandprotocol.service';

@Controller('bandprotocol')
export class BandprotocolController {
    constructor(private readonly bandprotocolService: BandprotocolService) {}

    @Get()
    home(): string {
        return 'Welcome To BAND page!';
    }

    @Get('block')
    getblock() {
        return this.bandprotocolService.getLatestBlockNumber();
    }
}
