import { TestBed } from '@angular/core/testing';
import { DarkModeService } from './dark-mode.service';

describe('DarkModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DarkModeService
    ]
  }));

  it('should be created', () => {
    const service: DarkModeService = TestBed.inject(DarkModeService);
    expect(service).toBeTruthy();
  });
});
