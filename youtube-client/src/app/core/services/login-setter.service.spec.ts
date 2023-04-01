import { TestBed } from '@angular/core/testing';

import { LoginSetterService } from './login-setter.service';

describe('LoginSetterService', () => {
  let service: LoginSetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
