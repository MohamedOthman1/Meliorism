import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  customizedGrid = {
    title: '',
    name: '',
    url: '',
    columns: [
      { field: '',
        title: '',
        width: '',
        filter: ''
      }
    ]
};

constructor() { }

}
