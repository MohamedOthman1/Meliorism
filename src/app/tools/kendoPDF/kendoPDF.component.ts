import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GridService } from 'src/app/_services/grid.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-kendoPDF',
  templateUrl: './kendoPDF.component.html',
  styleUrls: ['./kendoPDF.component.css']
})
export class KendoPDFComponent implements OnInit {
   pipe = new DatePipe('en-US');
   myFormattedDate = this.pipe.transform(Date.now(), 'MM/dd/yyyy');
   pdfname: any;
  constructor(public grid: GridService) {}

  ngOnInit() {
    this.pdfname = this.grid.customizedGrid.title + '_' + this.myFormattedDate ;
  }
}
