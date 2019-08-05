import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterPasswordPage } from './alter-password.page';

describe('AlterPasswordPage', () => {
  let component: AlterPasswordPage;
  let fixture: ComponentFixture<AlterPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
