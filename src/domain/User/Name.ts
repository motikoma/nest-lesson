import { ValueObject } from '../shared/ValueObject';

interface UserNameProps {
  firstName: string;
  lastName: string;
}

export class UserName extends ValueObject<UserNameProps> {
  static create(props: UserNameProps): UserName {
    return new UserName(props);
  }

  get firstName(): string {
    return this._value.firstName;
  }

  get lastName(): string {
    return this._value.lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
