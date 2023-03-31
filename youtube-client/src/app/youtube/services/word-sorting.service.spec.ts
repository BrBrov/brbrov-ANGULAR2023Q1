import { TestBed } from '@angular/core/testing';

import { WordSortingService } from './word-sorting.service';

describe('WordSortingService', () => {
  let service: WordSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
