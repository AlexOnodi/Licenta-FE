import { TestBed } from '@angular/core/testing';

import { ServiciuUtilizatorService } from './serviciu-utilizator.service';

describe('ServiciuUtilizatorService', () => {
  let service: ServiciuUtilizatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuUtilizatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
