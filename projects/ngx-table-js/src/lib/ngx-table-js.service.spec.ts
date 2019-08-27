import { TestBed } from '@angular/core/testing';

import { NgxTableJsService } from './ngx-table-js.service';

describe('NgxTableJsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTableJsService = TestBed.get(NgxTableJsService);
    expect(service).toBeTruthy();
  });
});
