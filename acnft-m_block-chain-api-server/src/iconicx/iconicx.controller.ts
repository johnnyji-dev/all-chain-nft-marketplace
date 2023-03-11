import { Controller, Get } from '@nestjs/common';
import { IconicxService } from './iconicx.service';

@Controller('iconicx')
export class IconicxController {
    constructor(private readonly iconicxService: IconicxService) {}

    @Get()
    home(): string {
        return 'Welcome To ICX page!';
    }

    @Get('block')
    getblock() {
        return this.iconicxService.getLatestBlockNumber();
    }
}
