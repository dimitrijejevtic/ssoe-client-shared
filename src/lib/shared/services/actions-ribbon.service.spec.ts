import { TestBed } from '@angular/core/testing';

import { ActionsRibbonService } from './actions-ribbon.service';

describe('ActionsRibbonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionsRibbonService = TestBed.get(ActionsRibbonService);
    expect(service).toBeTruthy();
  });
});
