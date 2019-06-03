import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {
  customizedExport = {
    title: '',
    columns: [
      { field: '',
        title: ''
      }
    ]
};

constructor() { }

}
