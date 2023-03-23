import { TestBed } from '@angular/core/testing';

import { DateComparsionService } from './date-comparsion.service';

describe('DateComparsionService', () => {
  let service: DateComparsionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateComparsionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
