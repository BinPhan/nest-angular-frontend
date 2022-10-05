import { TestBed } from '@angular/core/testing';

import { IdService } from './id.service';

describe('IdService', () => {
  let service: IdService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new IdService()

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return id', () => {
    expect(
      service.getID()
    ).toBe(1)
  })
});
