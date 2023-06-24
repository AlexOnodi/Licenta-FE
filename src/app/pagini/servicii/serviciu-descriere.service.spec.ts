import { TestBed } from '@angular/core/testing';

import { ServiciuDescriereService } from './serviciu-descriere.service';

describe('ServiciuDescriereService', () => {
  let service: ServiciuDescriereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuDescriereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
