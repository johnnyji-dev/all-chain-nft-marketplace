import { Test, TestingModule } from '@nestjs/testing';
import { BnbService } from './bnb.service';

describe('BnbService', () => {
  let service: BnbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BnbService],
    }).compile();

    service = module.get<BnbService>(BnbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
