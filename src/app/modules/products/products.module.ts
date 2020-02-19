import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from '../../mock/product-data.mock';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';

@NgModule({
  declarations: [ProductsListComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature(
      [ ProductEffects ]
    ),
  ],

})
export class ProductsModule { }
