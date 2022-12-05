import { ValueObject } from '../ValueObject';

interface ProductIdProps {
  id: string;
}

// https://www.npmjs.com/package/uuid
export class ProductId extends ValueObject<ProductIdProps> {
  static create(): ProductId {
    return new ProductId({
      id: crypto.randomUUID(),
    });
  }
  get id(): string {
    return this._value.id;
  }
}
