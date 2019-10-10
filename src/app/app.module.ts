import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {NavigationModule} from './ui-elements/navigation/navigation.module';
import {MatSidenavModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: './main/product/product.module#ProductModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    NavigationModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
