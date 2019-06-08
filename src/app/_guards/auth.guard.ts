import { Injectable } from '@angular/core';
import { ToastrService } from '../_services/toastr.service';
import { AuthService } from '../_services/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.toast.error('You shall not pass!!!', 'Error');
    this.router.navigate(['/home']);
    return false;
  }
}
