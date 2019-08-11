import { TestBed } from '@angular/core/testing';

import { SequenceStorageService } from './sequence-storage.service';

describe('SequenceStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SequenceStorageService = TestBed.get(SequenceStorageService);
    expect(service).toBeTruthy();
  });
});
