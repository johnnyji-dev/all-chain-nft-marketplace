import { Test, TestingModule } from '@nestjs/testing';
import { IconicxService } from './iconicx.service';

describe('IconicxService', () => {
  let service: IconicxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IconicxService],
    }).compile();

    service = module.get<IconicxService>(IconicxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
