import { TestBed } from '@angular/core/testing';

import { ServiciuCosCumparaturiService } from './serviciu-cos-cumparaturi.service';

describe('ServiciuCosCumparaturiService', () => {
  let service: ServiciuCosCumparaturiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuCosCumparaturiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
