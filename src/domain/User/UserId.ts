import { ValueObject } from '../ValueObject';

interface UserIDProps {
  id: string;
}

export class UserID extends ValueObject<UserIDProps> {
  static create(props: UserIDProps): UserID {
    return new UserID(props);
  }
  get id(): string {
    return this._value.id;
  }
}
