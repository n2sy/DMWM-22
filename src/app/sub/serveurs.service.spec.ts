import { TestBed } from '@angular/core/testing';

import { ServeursService } from './serveurs.service';

describe('ServeursService', () => {
  let service: ServeursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
