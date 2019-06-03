import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  constructor(public toastr: ToastrManager) {}

  success(message: string, title: string) {
    this.toastr.successToastr(message, title, { position: 'bottom-right' });
  }

  error(message: string, title: string) {
    this.toastr.errorToastr(message, title, { position: 'bottom-right' });
  }

  waring(message: string, title: string) {
    this.toastr.warningToastr(message, title, { position: 'bottom-right' });
  }

  info(message: string, title: string) {
    this.toastr.infoToastr(message, title, { position: 'bottom-right' });
  }
}
