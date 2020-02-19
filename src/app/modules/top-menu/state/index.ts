import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromMenu from './menu.reducer'

export interface State extends fromRoot.State {
    menu: fromMenu.MenuState;
}

const getMenuFeatureState = createFeatureSelector<fromMenu.MenuState>('menu');

export const getShowOnlyOnSale = createSelector(
    getMenuFeatureState,
    state => state.showOnlyOnSale
);


