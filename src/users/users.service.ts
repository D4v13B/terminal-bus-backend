import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateDescription } from "typeorm";
import {GetUserDto, CreateUserDto, UpdateUserDto, DeleteUserDto} from "./dto/users";
// import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async get(GetUserDto: GetUserDto){
    return await this.usersRepository;
  }

  async findOneById(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async update(id: number, UpdateUserDto: UpdateUserDto){
    return await this.usersRepository.update(id, UpdateUserDto);
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}