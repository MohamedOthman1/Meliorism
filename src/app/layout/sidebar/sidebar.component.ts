import { AuthService } from 'src/app/_services/auth.service';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ToastrService } from '../../_services/toastr.service';
import { BreadcrumbService } from '../../_services/breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  navbarOpen = false;
  constructor(
    private toast: ToastrService,
    public bread: BreadcrumbService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  logout() {
    this.authService.logout();
  }
}
