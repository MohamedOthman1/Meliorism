import { ToastrService } from '../../_services/toastr.service';
import { BreadcrumbService } from '../../_services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  header = {
    title: 'Employees',
    pages: [{ text: 'List of employees', url: '/employee/employeeList' }, { text: 'Add new employee', url: '/employee/addEmployee' }]
  };
  constructor(private router: Router, private fb: FormBuilder, private bread: BreadcrumbService, private toast: ToastrService) {}

  ngOnInit() {
    this.createEmployeeForm();
    this.bread.breadcrumb = this.header;
  }
  createEmployeeForm() {
    this.employeeForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required]
      }
    );
  }

  save() {
    this.toast.success('Test !', 'Success');
  }
}
