import { BreadcrumbService } from '../../_services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  data;
  constructor(public bread: BreadcrumbService) {}

  ngOnInit() {
    this.data = this.bread.breadcrumb;
  }
}
