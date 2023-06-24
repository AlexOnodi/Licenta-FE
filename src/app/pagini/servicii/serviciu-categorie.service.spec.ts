import { TestBed } from '@angular/core/testing';

import { ServiciuCategorieService } from './serviciu-categorie.service';

describe('ServiciuCategorieService', () => {
  let service: ServiciuCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
