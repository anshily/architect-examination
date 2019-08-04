import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNavComponent } from './test-nav.component';

describe('TestNavComponent', () => {
  let component: TestNavComponent;
  let fixture: ComponentFixture<TestNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNavComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
