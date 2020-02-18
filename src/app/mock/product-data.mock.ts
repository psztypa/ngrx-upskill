import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../modules/products/models/product.model';

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                _id: "1",
                name: 'Leaf Rake',
                isOnSale: false,
                price: 3.2
            },
            {
                _id: "2",
                name: 'Garden Cart',
                isOnSale: false,
                price: 4.2
            },
            {
                _id: "5",
                name: 'Hammer',
                isOnSale: false,
                price: 4.8
            },
            {
                _id: '8',
                name: 'Saw',
                isOnSale: false,
                price: 3.7
            },
            {
                _id: '10',
                name: 'V_ideo Game Controller',
                isOnSale: false,
                price: 4.6
            }
        ];
        return { products };
    }
}
