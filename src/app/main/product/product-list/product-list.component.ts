import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {ProductService} from '../services/product.service';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cols: any[];
  data: any[];

  constructor(
    public dialog: MatDialog,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'code', header: 'Code'},
      {field: 'brand', header: 'Brand'},
      {field: 'price', header: 'Price'},
      {field: 'description', header: 'Description'},
    ];

    this.getProducts();
  }

  getProducts() {
    this.productService.getResources().subscribe(res => {
      this.data = res;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        if (!data.id) {
          this.productService.createResource(data).subscribe(res => {
            this.data.unshift(data);
          });
        }
      }
    });

  }
}
