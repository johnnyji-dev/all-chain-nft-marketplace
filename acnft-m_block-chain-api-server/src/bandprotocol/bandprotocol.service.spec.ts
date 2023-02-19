import { Test, TestingModule } from '@nestjs/testing';
import { BandprotocolService } from './bandprotocol.service';

describe('BandprotocolService', () => {
  let service: BandprotocolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandprotocolService],
    }).compile();

    service = module.get<BandprotocolService>(BandprotocolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
