import { Product } from '../models/product.model';

export interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

export function reducer(state = initialState, action: ProductActions): ProductState { }