import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { RegisterUserDto } from '../auth/dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
    @InjectMapper() private readonly Mapper: Mapper,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.model.findOne({ _id: id }).exec();
  }

  async create(createUserDto: RegisterUserDto): Promise<User> {
    const newUser = this.Mapper.map(createUserDto, User, RegisterUserDto);
    return await new this.model({
      ...newUser,
    }).save();
  }

  async findOneById(id: string): Promise<User> {
    return this.model.findOne({ _id: id }).exec();
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.model.findOne({ username: username }).exec();
  }

  async getUserLoggedIn(id: string): Promise<User> {
    return await this.model.findOne({ _id: id }).exec();
  }
}
