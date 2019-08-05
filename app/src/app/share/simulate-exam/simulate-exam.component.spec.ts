import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateExamComponent } from './simulate-exam.component';

describe('SimulateExamComponent', () => {
  let component: SimulateExamComponent;
  let fixture: ComponentFixture<SimulateExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateExamComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
