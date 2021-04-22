import { TestBed } from '@angular/core/testing';

import { DinossauroDataService } from './dinossauro-data.service';

describe('DinossauroDataService', () => {
  let service: DinossauroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinossauroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
