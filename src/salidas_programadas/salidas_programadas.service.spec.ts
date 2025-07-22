import { Test, TestingModule } from '@nestjs/testing';
import { SalidasProgramadasService } from './salidas_programadas.service';

describe('SalidasProgramadasService', () => {
  let service: SalidasProgramadasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalidasProgramadasService],
    }).compile();

    service = module.get<SalidasProgramadasService>(SalidasProgramadasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
