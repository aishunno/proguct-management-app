import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-data-table',
  templateUrl: './custom-data-table.component.html',
  styleUrls: ['./custom-data-table.component.css']
})
export class CustomDataTableComponent implements OnInit {
  @Input() cols: any[];
  @Input() data: any[];
  @Input() tableHeader: string;
  @Input() rows: number;
  @Input() paginator: boolean;
  @Input() showActionButtons: boolean;

  @Output() addNewDataButtonClicked = new EventEmitter();
  @Output() deleteDataButtonClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  onAddNewButtonClick() {
    this.addNewDataButtonClicked.emit(null);
  }

  onDeleteButtonClick(rowData) {
    this.deleteDataButtonClicked.emit(rowData);
  }
}
