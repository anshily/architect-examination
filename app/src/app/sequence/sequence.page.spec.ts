import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencePage } from './sequence.page';

describe('SequencePage', () => {
  let component: SequencePage;
  let fixture: ComponentFixture<SequencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
