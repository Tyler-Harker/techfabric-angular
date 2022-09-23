import { TestBed } from '@angular/core/testing';

import { MsalAuthService } from './msalAuth.service';

describe('MsalService', () => {
  let service: MsalAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsalAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
