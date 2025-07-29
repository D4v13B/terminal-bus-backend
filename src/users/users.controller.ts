import { Body, Controller, HttpCode, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiParam } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Put(':id')
    @HttpCode(200)
    @ApiParam({ name: 'id', type: String })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
      }
}
