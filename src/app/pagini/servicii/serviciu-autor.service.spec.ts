import { TestBed } from '@angular/core/testing';

import { ServiciuAutorService } from './serviciu-autor.service';

describe('ServiciuAutorService', () => {
  let service: ServiciuAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
