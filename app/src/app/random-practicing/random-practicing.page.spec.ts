import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPracticingPage } from './random-practicing.page';

describe('RandomPracticingPage', () => {
  let component: RandomPracticingPage;
  let fixture: ComponentFixture<RandomPracticingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPracticingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPracticingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
