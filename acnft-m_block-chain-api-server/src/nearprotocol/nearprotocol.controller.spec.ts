import { Test, TestingModule } from '@nestjs/testing';
import { NearprotocolController } from './nearprotocol.controller';

describe('NearprotocolController', () => {
  let controller: NearprotocolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NearprotocolController],
    }).compile();

    controller = module.get<NearprotocolController>(NearprotocolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
