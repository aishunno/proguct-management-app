import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import {MatButtonModule, MatCardModule} from '@angular/material';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductDescriptionModule { }
