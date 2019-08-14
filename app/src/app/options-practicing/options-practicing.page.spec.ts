import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPracticingPage } from './options-practicing.page';

describe('OptionsPracticingPage', () => {
  let component: OptionsPracticingPage;
  let fixture: ComponentFixture<OptionsPracticingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsPracticingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPracticingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
