import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechfabricAngularControlsComponent } from './techfabric-angular-controls.component';

describe('TechfabricAngularControlsComponent', () => {
  let component: TechfabricAngularControlsComponent;
  let fixture: ComponentFixture<TechfabricAngularControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechfabricAngularControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechfabricAngularControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
