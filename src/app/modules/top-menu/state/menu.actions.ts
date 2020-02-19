import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  ToggleShowOnlyOnSale = '[Menu] Toggle show only on sale'
}

export class ToggleShowOnlyOnSale implements Action {
  readonly type = MenuActionTypes.ToggleShowOnlyOnSale;

  constructor(public payload: boolean) { }
}

export type MenuActions = ToggleShowOnlyOnSale;
