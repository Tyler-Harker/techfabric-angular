import { TestBed } from '@angular/core/testing';

import { TechfabricAngularMsalNgrxService } from './techfabric-angular-msal-ngrx.service';

describe('TechfabricAngularMsalNgrxService', () => {
  let service: TechfabricAngularMsalNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechfabricAngularMsalNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
