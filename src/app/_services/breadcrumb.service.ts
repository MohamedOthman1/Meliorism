import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
  breadcrumb = {
    title: '',
    pages: [
      {
        text: '',
        url: ''
      }
    ]
  };

  constructor() {}
  changeHEader() {}
}
