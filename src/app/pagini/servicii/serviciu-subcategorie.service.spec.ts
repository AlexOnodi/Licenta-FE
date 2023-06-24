import { TestBed } from '@angular/core/testing';

import { ServiciuSubcategorieService } from './serviciu-subcategorie.service';

describe('ServiciuSubcategorieService', () => {
  let service: ServiciuSubcategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuSubcategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
