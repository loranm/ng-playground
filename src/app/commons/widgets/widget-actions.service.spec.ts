import { TestBed } from '@angular/core/testing';

import { WidgetActions } from './widget-actions.service';

describe('WidgetActionsService', () => {
  let service: WidgetActions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetActions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
