import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDetailPage } from './sign-up-detail.page';

describe('SignUpDetailPage', () => {
  let component: SignUpDetailPage;
  let fixture: ComponentFixture<SignUpDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
