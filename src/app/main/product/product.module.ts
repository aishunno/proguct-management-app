import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import {ProductListModule} from './product-list/product-list.module';
import {ProductDescriptionModule} from './product-details/product-description.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductListModule,
    ProductDescriptionModule,
  ]
})
export class ProductModule { }
