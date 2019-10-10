import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import {MatButtonModule, MatListModule, MatSidenavModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavigationComponent],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatButtonModule
  ]
})
export class NavigationModule { }
