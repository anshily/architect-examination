import { TestBed } from '@angular/core/testing';

import { CommonStorageService } from './common-storage.service';

describe('CommonStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonStorageService = TestBed.get(CommonStorageService);
    expect(service).toBeTruthy();
  });
});
