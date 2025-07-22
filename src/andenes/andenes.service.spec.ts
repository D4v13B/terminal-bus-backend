import { Test, TestingModule } from '@nestjs/testing';
import { AndenesService } from './andenes.service';

describe('AndenesService', () => {
  let service: AndenesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AndenesService],
    }).compile();

    service = module.get<AndenesService>(AndenesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
