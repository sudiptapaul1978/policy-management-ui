import { TestBed, inject } from '@angular/core/testing';

import { TokenGeneratorService } from './token-generator.service';

describe('TokenGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenGeneratorService]
    });
  });

  it('should be created', inject([TokenGeneratorService], (service: TokenGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
