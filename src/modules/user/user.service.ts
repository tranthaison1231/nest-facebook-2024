import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(user: CreateUserDto) {
    return this.userRepository.create(user);
  }

  findAll(): User[] {
    let users = this.userRepository.findAll();

    users = users.filter((user) => user.age > 18);

    return users;
  }

  findOne(id: string): User {
    return this.userRepository.findOne(id);
  }
}
