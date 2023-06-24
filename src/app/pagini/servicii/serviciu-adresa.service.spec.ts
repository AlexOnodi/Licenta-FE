import { TestBed } from '@angular/core/testing';

import { ServiciuAdresaService } from './serviciu-adresa.service';

describe('ServiciuAdresaService', () => {
  let service: ServiciuAdresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuAdresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
