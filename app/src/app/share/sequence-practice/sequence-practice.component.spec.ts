import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencePracticeComponent } from './sequence-practice.component';

describe('SequencePracticeComponent', () => {
  let component: SequencePracticeComponent;
  let fixture: ComponentFixture<SequencePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencePracticeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
