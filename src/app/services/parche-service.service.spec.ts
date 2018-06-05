import { TestBed, inject } from '@angular/core/testing';

import { ParcheServiceService } from './parche-service.service';

describe('ParcheServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcheServiceService]
    });
  });

  it('should be created', inject([ParcheServiceService], (service: ParcheServiceService) => {
    expect(service).toBeTruthy();
  }));
});
