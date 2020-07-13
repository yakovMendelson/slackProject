import { TestBed } from '@angular/core/testing';

import { UserPasswordSERService } from './user-password-ser.service';

describe('UserPasswordSERService', () => {
  let service: UserPasswordSERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPasswordSERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
