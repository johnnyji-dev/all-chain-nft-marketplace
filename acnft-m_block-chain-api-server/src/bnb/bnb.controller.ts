import { Controller, Get } from '@nestjs/common';
import { BnbService } from './bnb.service';

@Controller('bnb')
export class BnbController {
    constructor(private readonly bnbService: BnbService) {}

    @Get()
    home(): string {
        return 'Welcom To BNB page!';
    }

    @Get('block')
    getblock() {
        return this.bnbService.getLatestBlockNumber();
    }
}
