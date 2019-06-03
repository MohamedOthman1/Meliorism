import { employees } from './employees';
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Component, OnInit} from '@angular/core';
import { GridService } from '../_services/grid.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public result: string;
  employeePdf = {
      title: 'Employees',
      url: '/employee/addEmployee',
      name: 'employee',
      columns: [
        { field: 'name', title: 'Name', filter: 'text', width: '50' },
        { field: 'age', title: 'Age', filter: 'numeric', width: '50' },
        { field: 'city', title: 'City', filter: 'text', width: '50' },
        { field: 'status', title: 'Status', filter: 'text', width: '50'  }
      ]
  };
  header = {
    title: 'Employees',
    pages: [
      { text: 'List of employees', url: '/employee/employeeList' },
      { text: 'Add new employee', url: '/employee/addEmployee' }
    ]
  };
  constructor(
    private bread: BreadcrumbService,
    private grid: GridService
  ) {}

  public gridData = employees;

  ngOnInit() {
    this.bread.breadcrumb = this.header;
    this.grid.customizedGrid = this.employeePdf;
  }
}
