import { ValueObject } from '../../domain/shared/ValueObject';
import { v4 } from 'uuid';

interface ProductIdProps {
  id: string;
}

// https://www.npmjs.com/package/uuid
export class ProductId extends ValueObject<ProductIdProps> {
  static create(): ProductId {
    return new ProductId({
      id: v4(),
    });
  }
  static reconstruct(id: string): ProductId {
    return new ProductId({ id });
  }
  get id(): string {
    return this._value.id;
  }
}
