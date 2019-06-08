import { orders } from './orders';
import { BreadcrumbService } from '../_services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { GridService } from '../_services/grid.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public result;
  name: any;
  orderPdf = {
    title: 'Orders',
    url: '/order/addOrder',
    columns: [
      { field: 'orderNumber', title: 'Order Number', width: '20', filter: 'text' },
      { field: 'orderTable', title: 'Order Table', width: '20', filter: 'text' },
      { field: 'orderDescription', title: 'Description', width: '50', filter: 'text' },
      { field: 'orderDate', title: 'Date', width: '30', filter: 'date' },
      { field: 'orderPrice', title: 'Price', width: '30', filter: 'numeric' }
    ]
};
  header = {
    title: 'Order',
    pages: [{ text: 'List of orders', url: '/order/ordersList' }, { text: 'Add new order', url: '/order/addOrder' }]
  };
  constructor(private bread: BreadcrumbService, private grid: GridService) {}


  public gridData = orders;

  ngOnInit() {
    this.bread.breadcrumb = this.header;
    this.grid.customizedGrid = this.orderPdf;
  }

}
