import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { RegisterUserDto } from '../auth/dto/register-user.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly model: Model<ProjectDocument>,
    @InjectMapper() private readonly Mapper: Mapper,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.model.findOne({ _id: id }).exec();
  }

  async create(createUserDto: RegisterUserDto): Promise<Project> {
    const newUser = this.Mapper.map(createUserDto, Project, RegisterUserDto);
    return await new this.model({
      ...newUser,
    }).save();
  }
}
