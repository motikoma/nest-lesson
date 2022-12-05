import { shallowEqual } from 'shallow-equal-object';
export abstract class AbstractValueObject<T> {
  protected readonly _value: T;

  protected constructor(_value: T) {
    this._value = Object.freeze(_value);
  }

  equals(vo?: AbstractValueObject<T>): boolean {
    if (vo == null) {
      return false;
    }
    return shallowEqual(this._value, vo._value);
  }
}

interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<
  T extends ValueObjectProps,
> extends AbstractValueObject<T> {}

// 使用例

// interface UserProps {
//   id: number;
//   name: string;
// }

// class User extends ValueObject<UserProps> {
//   static create(props: UserProps): User {
//     return new User(props);
//   }

//   get name(): string {
//     return this._value.name;
//   }
// }
