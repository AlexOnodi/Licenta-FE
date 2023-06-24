import { TestBed } from '@angular/core/testing';

import { ServiciuCreareUtilizatorService } from './serviciu-creare-utilizator.service';

describe('ServiciuCreareUtilizatorService', () => {
  let service: ServiciuCreareUtilizatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuCreareUtilizatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
