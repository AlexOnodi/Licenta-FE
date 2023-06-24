import { TestBed } from '@angular/core/testing';

import { ServiciuFormLogareService } from './serviciu-form-logare.service';

describe('ServiciuFormLogareService', () => {
  let service: ServiciuFormLogareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuFormLogareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
