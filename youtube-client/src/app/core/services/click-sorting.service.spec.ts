import { TestBed } from '@angular/core/testing';

import { ClickSortingService } from './click-sorting.service';

describe('ClickSortingService', () => {
  let service: ClickSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
