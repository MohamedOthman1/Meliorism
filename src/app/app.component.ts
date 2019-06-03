import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from './_services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  constructor(private router: Router, private fb: FormBuilder, private toast: ToastrService) {}

  ngOnInit() {
/*    this.router.navigate(['/home']);*/
    }
}
