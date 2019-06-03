import { ToastrService } from '../../_services/toastr.service';
import { BreadcrumbService } from '../../_services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderForm: FormGroup;
  header = {
    title: 'Order',
    pages: [{ text: 'List of orders', url: '/order/ordersList' }, { text: 'Add new order', url: '/order/addOrder' }]
  };
  constructor(private router: Router, private fb: FormBuilder,
    private bread: BreadcrumbService, private toast: ToastrService) {}

  ngOnInit() {
    this.createOrderForm();
    this.bread.breadcrumb = this.header;
  }
  createOrderForm() {
    this.orderForm = this.fb.group({
      description: ['', Validators.required],
      customer: ['', Validators.required],
      foodItem: ['', Validators.required],
      quantity: ['', Validators.required],
      table: ['', Validators.required]
    });
  }

  save() {
      this.toast.success('Test !', 'Success');
    }
}
