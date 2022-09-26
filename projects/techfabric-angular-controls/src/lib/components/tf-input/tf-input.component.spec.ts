/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TfInputComponent } from './tf-input.component';

describe('TfInputComponent', () => {
  let component: TfInputComponent;
  let fixture: ComponentFixture<TfInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
