import { TestBed } from '@angular/core/testing';

import { WineDetailResolverService } from './wine-detail-resolver.service';

describe('WineDetailResolverService', () => {
  let service: WineDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
