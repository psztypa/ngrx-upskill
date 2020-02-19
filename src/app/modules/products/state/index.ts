import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromProducts from './product.reducer'

import * as fromMenu from '../../top-menu/state/menu.reducer'

export interface State extends fromRoot.State {
    products: fromProducts.ProductState;
}

const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>('products');
// const getMenuFeatureState = createFeatureSelector<fromMenu.MenuState>('menu');

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

// export const getShowOnlyOnSale = createSelector(
//     getMenuFeatureState,
//     state => state.showOnlyOnSale
// );