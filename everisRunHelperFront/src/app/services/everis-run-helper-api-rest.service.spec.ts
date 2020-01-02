import { TestBed } from '@angular/core/testing';

import { EverisRunHelperApiRestService } from './everis-run-helper-api-rest.service';

describe('EverisRunHelperApiRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EverisRunHelperApiRestService = TestBed.get(EverisRunHelperApiRestService);
    expect(service).toBeTruthy();
  });
});
