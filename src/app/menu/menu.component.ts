import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import {BreadcrumbService} from '../_services/breadcrumb.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInOut1', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('1s 500ms ease-in')),
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('1s 100ms ease-in')),
    ]),
  ]
})
export class MenuComponent implements OnInit {

  constructor(private bread: BreadcrumbService) { }

  ngOnInit() {
    this.bread.breadcrumb = null;
  }

}
