import { TestBed } from '@angular/core/testing';

import { ServiciuAutentificareInterceptorService } from './serviciu-autentificare-interceptor.service';

describe('ServiciuAutentificareInterceptorService', () => {
  let service: ServiciuAutentificareInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuAutentificareInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
