import { TestBed, inject } from '@angular/core/testing';

import { MadridService } from './madrid.service';

describe('MadridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadridService]
    });
  });

  it('should be created', inject([MadridService], (service: MadridService) => {
    expect(service).toBeTruthy();
  }));
});
