import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechfabricAngularMsalNgrxComponent } from './techfabric-angular-msal-ngrx.component';

describe('TechfabricAngularMsalNgrxComponent', () => {
  let component: TechfabricAngularMsalNgrxComponent;
  let fixture: ComponentFixture<TechfabricAngularMsalNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechfabricAngularMsalNgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechfabricAngularMsalNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
