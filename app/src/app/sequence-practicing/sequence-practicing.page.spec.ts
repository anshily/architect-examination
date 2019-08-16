import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencePracticingPage } from './sequence-practicing.page';

describe('SequencePracticingPage', () => {
  let component: SequencePracticingPage;
  let fixture: ComponentFixture<SequencePracticingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencePracticingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencePracticingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
