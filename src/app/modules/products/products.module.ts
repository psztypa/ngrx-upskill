import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from '../../mock/product-data.mock';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [ProductsListComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule

  ]
})
export class ProductsModule { }
