import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
  it('Should have add function', inject([TestService], (service: TestService) => {
    expect(TestService.add).toBeTruthy();
  }));
  it('Should add number correctly', inject([TestService], (service: TestService) => {
    expect(TestService.add(10, 9)).toEqual(19);
  }));
});
