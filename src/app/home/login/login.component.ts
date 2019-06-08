import { User } from './../../_models/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '../../_services/toastr.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  @Output() registerForm = new EventEmitter();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  register() {
    this.registerForm.emit(false);
  }
  login() {
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this.authService.login(this.user).subscribe(
        next => {
          this.toast.success('Logged in successfully', 'Success');
        },
        error => {
          this.toast.error(error, 'Error');
        },
        () => {
          this.router.navigate(['/index']);
        }
      );
    }
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.toast.info('logged out', '');
    this.router.navigate(['/home']);
  }
}
