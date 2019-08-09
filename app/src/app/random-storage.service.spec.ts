import { TestBed } from '@angular/core/testing';

import { RandomStorageService } from './random-storage.service';

describe('RandomStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomStorageService = TestBed.get(RandomStorageService);
    expect(service).toBeTruthy();
  });
});
