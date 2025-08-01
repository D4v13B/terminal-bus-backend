import { Test, TestingModule } from '@nestjs/testing';
import { BotApiController } from './bot-api.controller';

describe('BotApiController', () => {
  let controller: BotApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BotApiController],
    }).compile();

    controller = module.get<BotApiController>(BotApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
