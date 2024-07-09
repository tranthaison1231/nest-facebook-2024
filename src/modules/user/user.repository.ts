import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserRepository {
  private readonly users: User[] = [];

  create(user: CreateUserDto) {
    const createdUser = {
      id: Date.now().toString(),
      name: user.name,
      age: user.age,
    };

    this.users.push(createdUser);

    return createdUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }
}
