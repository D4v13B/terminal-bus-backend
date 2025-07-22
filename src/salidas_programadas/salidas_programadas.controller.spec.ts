import { Test, TestingModule } from '@nestjs/testing';
import { SalidasProgramadasController } from './salidas_programadas.controller';
import { SalidasProgramadasService } from './salidas_programadas.service';

describe('SalidasProgramadasController', () => {
  let controller: SalidasProgramadasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalidasProgramadasController],
      providers: [SalidasProgramadasService],
    }).compile();

    controller = module.get<SalidasProgramadasController>(SalidasProgramadasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
