import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import {ProductListModule} from './product-list/product-list.module';
import {ProductDescriptionModule} from './product-description/product-description.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ProductListModule,
    ProductDescriptionModule,
  ]
})
export class ProductModule { }
