import { TestBed, inject } from '@angular/core/testing';

import { ParcheUsuarioService } from './parche-usuario.service';

describe('ParcheUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcheUsuarioService]
    });
  });

  it('should be created', inject([ParcheUsuarioService], (service: ParcheUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
