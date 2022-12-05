import { Entity } from '../shared/Entity';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';

interface ProductProps {
  id: ProductId;
  name: ProductName;
}

export class Product extends Entity<ProductProps> {
  static create(props: { name: ProductName }): Product {
    return new Product({
      id: ProductId.create(),
      name: new ProductName(),
    });
  }
}
