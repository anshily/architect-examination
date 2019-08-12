import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamReviewPage } from './exam-review.page';

describe('ExamReviewPage', () => {
  let component: ExamReviewPage;
  let fixture: ComponentFixture<ExamReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
