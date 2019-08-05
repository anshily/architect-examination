import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWrongPage } from './do-wrong.page';

describe('DoWrongPage', () => {
  let component: DoWrongPage;
  let fixture: ComponentFixture<DoWrongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoWrongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoWrongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
