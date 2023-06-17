import { TestBed } from '@angular/core/testing';

import { YCombinatorNewsService } from './y-combinator-news.service';

describe('YCombinatorNewsService', () => {
  let service: YCombinatorNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YCombinatorNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
