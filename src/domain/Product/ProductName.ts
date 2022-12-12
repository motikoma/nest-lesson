import { ValueObject } from '../shared/ValueObject';

interface ProductNameProps {
  productName: string;
}

export class ProductName extends ValueObject<ProductNameProps> {
  static readonly minLength = 1;
  static readonly maxLength = 100;

  private constructor(props: ProductNameProps) {
    super(props);
  }

  static create({ productName }: ProductNameProps): ProductName {
    if (productName.length < this.minLength) {
      throw new Error('商品名は1文字以上を指定してください');
    }
    if (productName.length > this.maxLength) {
      throw new Error('商品名は100文字以下を指定してください');
    }
    return new ProductName({ productName });
  }

  get name(): string {
    return this._value.productName;
  }
}
