import { TestBed } from '@angular/core/testing';

import { TechfabricAngularAppService } from './techfabric-angular-app.service';

describe('TechfabricAngularAppService', () => {
  let service: TechfabricAngularAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechfabricAngularAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
