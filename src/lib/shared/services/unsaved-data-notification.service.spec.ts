import { TestBed } from '@angular/core/testing';

import { UnsavedDataNotificationService } from './unsaved-data-notification.service';

describe('UnsavedDataNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnsavedDataNotificationService = TestBed.get(UnsavedDataNotificationService);
    expect(service).toBeTruthy();
  });
});
