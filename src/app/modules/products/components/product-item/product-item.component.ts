import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent  {

  @Input()
  product: Product;

  onClick():void {
    console.log('clicl')
  }

}
