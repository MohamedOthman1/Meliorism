import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  customizedGrid = {
    title: '',
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
