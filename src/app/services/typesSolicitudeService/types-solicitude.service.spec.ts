import { TestBed } from '@angular/core/testing';

import { TypesSolicitudeService } from './types-solicitude.service';

describe('TypesSolicitudeService', () => {
  let service: TypesSolicitudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesSolicitudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
