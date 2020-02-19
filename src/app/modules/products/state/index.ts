import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromProducts from './product.reducer'

export interface State extends fromRoot.State {
    products: fromProducts.ProductState;
}

const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>('products');

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);