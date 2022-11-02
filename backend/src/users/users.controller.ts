import { UseGuards, Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { RolesDecorator } from 'src/decorators/role.decorator';
import { Roles } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Public()
  @Post('/register')
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @UseGuards(RolesGuard)
  @RolesDecorator(Roles.ADMIN)
  @Get('/getall')
  findAll() {
    return this.userService.findAll();
  }
}
