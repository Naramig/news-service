import { AggregateRoot } from '@nestjs/cqrs';

export interface UserAwareInterface extends AggregateRoot {
  id: number;
  login: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt?: Date;

  register(password: string, name: string, date: Date);
}
