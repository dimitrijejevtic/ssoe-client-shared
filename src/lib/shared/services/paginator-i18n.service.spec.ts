import { TestBed } from '@angular/core/testing';

import { PaginatorI18nService } from './paginator-i18n.service';

describe('PaginatorI18nService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginatorI18nService = TestBed.get(PaginatorI18nService);
    expect(service).toBeTruthy();
  });
});
