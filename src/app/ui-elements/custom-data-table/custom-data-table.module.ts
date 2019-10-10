import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDataTableComponent } from './custom-data-table.component';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';



@NgModule({
  declarations: [CustomDataTableComponent],
  exports: [
    CustomDataTableComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CustomDataTableModule { }
