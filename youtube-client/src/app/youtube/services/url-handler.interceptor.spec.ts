import { TestBed } from '@angular/core/testing';

import { UrlHandlerInterceptor } from './url-handler.interceptor';

describe('UrlHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UrlHandlerInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: UrlHandlerInterceptor = TestBed.inject(UrlHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
