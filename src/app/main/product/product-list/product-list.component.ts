import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {ProductService} from '../services/product.service';
import {DialogComponent} from './dialog/dialog.component';
import {Router, Routes} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  cols: any[];
  data: any[];

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    public dialog: MatDialog,
    private router: Router,
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
    this.productService.getResources()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
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

  deleteProduct(data) {
    this.productService.deleteResource(data.id).subscribe(res => {
      this.data = this.data.filter(product => product.id !== data.id);
    });
  }

  onRowClicked(rowData) {
    this.router.navigate([`product/${rowData.id}`]);
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
