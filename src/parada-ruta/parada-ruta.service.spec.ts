import { Test, TestingModule } from '@nestjs/testing';
import { ParadaRutaService } from './parada-ruta.service';

describe('ParadaRutaService', () => {
  let service: ParadaRutaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParadaRutaService],
    }).compile();

    service = module.get<ParadaRutaService>(ParadaRutaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
