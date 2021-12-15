
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SignUpComponent } from './sign-up.component';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],

      imports:[
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing title', () => {
    expect(component.componentName).toBe("sign-up")
  });

  it('should contain default value for signupForm', () => {
    expect(component.signupForm.value).toEqual ({ service:'advance',fullName:'', email:'',password:'', phone: ''});
  });

  // it('should register user if the form is valid and should navigate to the log-in', () => {
  //   component.signupForm.setValue({ service:'advance',fullName:'admin', email:'admin',password:'admin', phone: 'admin'});
  //   spyOn(component.router, 'navigate');
  //   component.onSubmit();
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/log-in'])
  // })

});
