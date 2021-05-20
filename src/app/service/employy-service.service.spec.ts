import { TestBed } from '@angular/core/testing';

import { EmployyServiceService } from './employy-service.service';

describe('EmployyServiceService', () => {
  let service: EmployyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
