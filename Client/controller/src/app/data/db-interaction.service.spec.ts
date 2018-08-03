import { TestBed, inject } from '@angular/core/testing';

import { DbInteractionService } from './db-interaction.service';

describe('DbInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbInteractionService]
    });
  });

  it('should be created', inject([DbInteractionService], (service: DbInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
