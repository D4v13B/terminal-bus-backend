import { Test, TestingModule } from '@nestjs/testing';
import { ParadaRutaController } from './parada-ruta.controller';
import { ParadaRutaService } from './parada-ruta.service';

describe('ParadaRutaController', () => {
  let controller: ParadaRutaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParadaRutaController],
      providers: [ParadaRutaService],
    }).compile();

    controller = module.get<ParadaRutaController>(ParadaRutaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
