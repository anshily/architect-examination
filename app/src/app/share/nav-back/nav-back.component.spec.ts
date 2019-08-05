import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBackComponent } from './nav-back.component';

describe('NavBackComponent', () => {
  let component: NavBackComponent;
  let fixture: ComponentFixture<NavBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBackComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
