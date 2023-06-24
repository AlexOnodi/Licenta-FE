import { TestBed } from '@angular/core/testing';

import { ServiciuRolUtilizatorService } from './serviciu-rol-utilizator.service';

describe('ServiciuRolUtilizatorService', () => {
  let service: ServiciuRolUtilizatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuRolUtilizatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
