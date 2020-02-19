import { ProductService } from '../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as productActions from './product.actions';

@Injectable()
export class ProductEffects {

    constructor(private productService: ProductService,
        private actions$: Actions) { }

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap(action =>
            this.productService.getProducts().pipe(
                map(products => (new productActions.LoadSuccess(products))),
                catchError(err => of(new productActions.LoadFail(err)))
            )
        )
    );
}