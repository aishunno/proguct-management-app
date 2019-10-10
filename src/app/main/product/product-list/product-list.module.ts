import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list.component';
import {Routes, RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {CustomDataTableModule} from '../../../ui-elements/custom-data-table/custom-data-table.module';
import { DialogComponent } from './dialog/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  }
];

@NgModule({
  declarations: [ProductListComponent, DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    CustomDataTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
  ]
})
export class ProductListModule {
}
