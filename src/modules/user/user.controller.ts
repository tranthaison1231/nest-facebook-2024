import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): { items: User[] } {
    const items = this.userService.findAll();

    return {
      items: items,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): User {
    return {
      id,
      name: updateUserDto.name,
      age: updateUserDto.age,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Remove #${id} user`;
  }
}
