import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingPage } from './practicing.page';

describe('PracticingPage', () => {
  let component: PracticingPage;
  let fixture: ComponentFixture<PracticingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
