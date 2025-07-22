import { Test, TestingModule } from '@nestjs/testing';
import { AndenesController } from './andenes.controller';
import { AndenesService } from './andenes.service';

describe('AndenesController', () => {
  let controller: AndenesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AndenesController],
      providers: [AndenesService],
    }).compile();

    controller = module.get<AndenesController>(AndenesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
