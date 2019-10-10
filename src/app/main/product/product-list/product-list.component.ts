import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
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

  paginationInfo: any[];

  private unsubscribeAll: Subject<any> = new Subject<any>();
  private totalPage: number;
  currentPage = 1;

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
    this.productService.getResources(1)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        this.data = res.data;
        this.paginationInfo = res;
        console.log(this.currentPage);
        this.calculateTotalPage();
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

  get paginationRange() {
    const items = [];
    for (let i = 1; i <= this.totalPage; i++) {
      items.push(i);
    }
    return items;
  }

  calculateTotalPage() {
    // @ts-ignore
    this.totalPage = Math.ceil(this.paginationInfo.total / this.paginationInfo.per_page);
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  getNextPage(page) {
    this.productService.getResources(page)
      .subscribe(res => {
        this.data = res.data;
        this.currentPage = res.current_page;
      });
  }
}
