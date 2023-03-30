import { TestBed } from '@angular/core/testing';

import { DateSortingService } from './date-sorting.service';

describe('DateSortingService', () => {
  let service: DateSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
