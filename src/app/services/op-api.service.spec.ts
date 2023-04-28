import { TestBed } from '@angular/core/testing';

import { OpApiService } from './op-api.service';

describe('OpApiService', () => {
  let service: OpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
