import { Test, TestingModule } from '@nestjs/testing';
import { BandprotocolController } from './bandprotocol.controller';

describe('BandprotocolController', () => {
  let controller: BandprotocolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandprotocolController],
    }).compile();

    controller = module.get<BandprotocolController>(BandprotocolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
