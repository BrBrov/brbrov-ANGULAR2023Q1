import { TestBed } from '@angular/core/testing';

import { CountSortingService } from './count-sorting.service';

describe('CountSortingService', () => {
  let service: CountSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
