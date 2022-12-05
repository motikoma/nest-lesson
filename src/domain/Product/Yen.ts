import { ValueObject } from '../ValueObject';

interface YenProps {
  amount: number;
}

export class Yen extends ValueObject<YenProps> {
  static readonly minAmount = 0;
  static readonly maxAmount = 100000000;
  static create({ amount }: YenProps): Yen {
    if (amount < this.minAmount) {
      throw new Error('金額は正の値を指定してください');
    }
    if (amount > this.maxAmount) {
      throw new Error('金額は1千万以下を指定してください');
    }
    return new Yen({ amount });
  }
  get yen(): number {
    return this._value.amount;
  }
}
