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

  @Output() addNewDataButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onAddNewButtonClick() {
    this.addNewDataButtonClicked.emit(null);
  }
}
