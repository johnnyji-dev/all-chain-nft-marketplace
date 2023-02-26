import { Test, TestingModule } from '@nestjs/testing';
import { BnbController } from './bnb.controller';

describe('BnbController', () => {
  let controller: BnbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BnbController],
    }).compile();

    controller = module.get<BnbController>(BnbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
