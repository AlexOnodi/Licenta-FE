import { TestBed } from '@angular/core/testing';

import { ServiciuJwtService } from './serviciu-jwt.service';

describe('ServiciuJwtService', () => {
  let service: ServiciuJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
