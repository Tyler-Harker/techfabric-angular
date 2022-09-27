import { TestBed } from '@angular/core/testing';

import { TechfabricAngularControlsService } from './techfabric-angular-controls.service';
 
describe('TechfabricAngularControlsService', () => { 
  let service: TechfabricAngularControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechfabricAngularControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
