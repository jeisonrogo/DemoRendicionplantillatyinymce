import { TestBed } from '@angular/core/testing';

import { HttpRendicionService } from './http-rendicion.service';

describe('HttpRendicionService', () => {
  let service: HttpRendicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRendicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
