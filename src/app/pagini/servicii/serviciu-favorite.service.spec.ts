import { TestBed } from '@angular/core/testing';

import { ServiciuFavoriteService } from './serviciu-favorite.service';

describe('ServiciuFavoriteService', () => {
  let service: ServiciuFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciuFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
