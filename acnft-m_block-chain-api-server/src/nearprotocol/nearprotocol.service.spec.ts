import { Test, TestingModule } from '@nestjs/testing';
import { NearprotocolService } from './nearprotocol.service';

describe('NearprotocolService', () => {
  let service: NearprotocolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NearprotocolService],
    }).compile();

    service = module.get<NearprotocolService>(NearprotocolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
