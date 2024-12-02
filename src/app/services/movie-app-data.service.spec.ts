import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MovieAppDataService } from './movie-app-data.service';

describe('MovieAppDataService', () => {
  let service: MovieAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MovieAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
