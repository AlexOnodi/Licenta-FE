import { TestBed } from '@angular/core/testing';

import { ServiciuAutentificareService } from './serviciu-autentificare.service';

describe('ServiciuAutentificareService', () => {
  let service: ServiciuAutentificareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuAutentificareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
