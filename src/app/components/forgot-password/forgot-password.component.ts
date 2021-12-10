import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService: UserServiceService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }

  get f() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.forgotForm.invalid) {
        return;
    }

}
}
