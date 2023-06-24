import { TestBed } from '@angular/core/testing';

import { ServiciuProdusService } from './serviciu-produs.service';

describe('ServiciuProdusService', () => {
  let service: ServiciuProdusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuProdusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
