import { Controller, Get } from '@nestjs/common';

@Controller('ethereum')
export class EthereumController {
    @Get()
    test(): string {
        return 'Welcome To ETH page'
    }
}
