import { TestBed, inject } from '@angular/core/testing';

import { FruitsService } from './fruits.service';

describe('FruitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitsService]
    });
  });

  it('should be created', inject([FruitsService], (service: FruitsService) => {
    expect(service).toBeTruthy();
  }));
});
