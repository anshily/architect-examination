import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpManagementPage } from './sign-up-management.page';

describe('SignUpManagementPage', () => {
  let component: SignUpManagementPage;
  let fixture: ComponentFixture<SignUpManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
