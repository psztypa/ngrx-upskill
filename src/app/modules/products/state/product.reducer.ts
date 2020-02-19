import { Product } from '../models/product.model';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface ProductState {
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  products: [],
  error: ''
};

export function reducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      };

    case ProductActionTypes.LoadFail:
      return {
        ...state,
        products: [],
        error: action.payload
      };
    default:
      return state;

  }
}