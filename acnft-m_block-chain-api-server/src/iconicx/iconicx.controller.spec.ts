import { Test, TestingModule } from '@nestjs/testing';
import { IconicxController } from './iconicx.controller';

describe('IconicxController', () => {
  let controller: IconicxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IconicxController],
    }).compile();

    controller = module.get<IconicxController>(IconicxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
