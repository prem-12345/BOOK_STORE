import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthenticationService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
