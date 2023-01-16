import { ProductId } from './product-id';
import { ProductName } from './product-name';
import { Yen } from './yen';

export class Product {
  private readonly _productId: ProductId;
  private readonly _productName: ProductName;
  private readonly _yen: Yen;

  constructor(productId: ProductId, productName: ProductName, yen: Yen) {
    this._productId = productId;
    this._productName = productName;
    this._yen = yen;
  }

  get productId() {
    return this._productId;
  }

  get productName() {
    return this._productName;
  }

  get yen() {
    return this._yen;
  }
}
