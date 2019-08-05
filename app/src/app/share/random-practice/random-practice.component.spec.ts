import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPracticeComponent } from './random-practice.component';

describe('RandomPracticeComponent', () => {
  let component: RandomPracticeComponent;
  let fixture: ComponentFixture<RandomPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPracticeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
