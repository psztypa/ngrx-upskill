import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import * as fromProduct from './../../state';
import * as fromMenu from './../../../top-menu/state';
import * as productActions from './../../state/product.actions';
import { Store, select } from '@ngrx/store';
import { Subscription, from } from 'rxjs';
import { switchMap, filter, map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  sub: Subscription;
  products: Product[];

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {

    this.store.dispatch(new productActions.Load());

    const products$ = this.store.pipe(select(fromProduct.getProducts));
    const showOnlyOnSale$ = this.store.pipe(select(fromMenu.getShowOnlyOnSale));

    showOnlyOnSale$.pipe(
      switchMap(value => products$
        .pipe(
          map(prods => prods.filter(prod => value ? prod.isOnSale === true : prod))
        ))
    ).subscribe(
      prods => { this.products = prods }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
