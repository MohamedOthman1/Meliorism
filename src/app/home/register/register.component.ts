import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {ToastrService} from '../../_services/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() loginForm = new EventEmitter();
  registerForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private toast: ToastrService) {}

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }

  login() {
    this.loginForm.emit(true);
  }

  register() {
    this.toast.success('Successfully Registered. You will now be taken back to the logon page!', 'Success');
    this.loginForm.emit(true);
  }
}
