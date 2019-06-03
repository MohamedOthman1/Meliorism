import { BreadcrumbService } from '../../_services/breadcrumb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  constructor(private bread: BreadcrumbService) {}

  header = {
    title: 'Food',
    pages: [{ text: 'Main Dishes', url: '/food/dishes' }, { text: 'Sandwiches', url: '/food/sandwishes' }]
  };

  ngOnInit() {
    this.bread.breadcrumb = this.header;
  }
}
