import { Test, TestingModule } from '@nestjs/testing';
import { PolkadotController } from './polkadot.controller';

describe('PolkadotController', () => {
  let controller: PolkadotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolkadotController],
    }).compile();

    controller = module.get<PolkadotController>(PolkadotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
