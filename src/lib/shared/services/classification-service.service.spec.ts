import { TestBed } from '@angular/core/testing';

import { ClassificationServiceService } from './classification-service.service';

describe('ClassificationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassificationServiceService = TestBed.get(ClassificationServiceService);
    expect(service).toBeTruthy();
  });
});
