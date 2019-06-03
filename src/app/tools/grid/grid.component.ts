import { GridService } from '../../_services/grid.service';
import { State, process } from '@progress/kendo-data-query';
import { Component, OnInit, Input } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DialogRef, DialogCloseResult, DialogService } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public result: string;
  @Input() public data: any;
  public confirmMessage: string;
  constructor(private dialogService: DialogService, public grid: GridService) { }

  public state: State = {
    skip: 0,
    take: 7
  };
   public gridData: GridDataResult ;



  // public gridData: GridDataResult = process(orders, this.state);

  // public dataStateChange(state: DataStateChangeEvent): void {
  //   this.state = state;
  //   this.gridData = process(orders, this.state);
  // }

  ngOnInit() {
   this.gridData = process(this.data, this.state);
    this.confirmMessage = 'Are you sure you want to delete this ' + this.grid.customizedGrid.name + ' ?';
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
   this.gridData = process(this.data, this.state);
 }

  public showConfirmation() {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: this.confirmMessage,
      actions: [{ text: 'No' }, { text: 'Yes', primary: true }],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe(result => {
      if (result instanceof DialogCloseResult) {
        console.log('close');
      } else {
        console.log('action', result);
      }

      this.result = JSON.stringify(result);
    });
  }

}
