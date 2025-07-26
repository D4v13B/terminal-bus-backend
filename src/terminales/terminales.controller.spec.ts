import { Test, TestingModule } from '@nestjs/testing';
import { TerminalesController } from './terminales.controller';
import { TerminalesService } from './terminales.service';

describe('TerminalesController', () => {
  let controller: TerminalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerminalesController],
      providers: [TerminalesService],
    }).compile();

    controller = module.get<TerminalesController>(TerminalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
