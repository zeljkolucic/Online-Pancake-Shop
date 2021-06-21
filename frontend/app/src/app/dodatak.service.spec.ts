import { TestBed } from '@angular/core/testing';

import { DodatakService } from './dodatak.service';

describe('DodatakService', () => {
  let service: DodatakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodatakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
