import { Entity } from '../shared/Entity';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';

interface ProductProps {
  name: ProductName;
}

export class Product extends Entity<ProductProps> {
  private constructor(id: string, props: ProductProps) {
    super(id, props);
  }

  static create(productId: ProductId, props: ProductProps): Product {
    return new Product(productId.id, props);
  }

  // NOTE: 基底クラスの値のgetterを作ることはできない
  // get _id(): ProductId {
  //   return this._id;
  // }

  get productName(): ProductName {
    return this.props.name;
  }
}
