import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from '../../_services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() registerForm = new EventEmitter();
  constructor(private router: Router, private fb: FormBuilder, private toast: ToastrService) {}

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.fb.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required],
      },
    );
  }
  register () {
    this.registerForm.emit(false);
  }
  login() {
    this.router.navigate(['index']);
  }

}
