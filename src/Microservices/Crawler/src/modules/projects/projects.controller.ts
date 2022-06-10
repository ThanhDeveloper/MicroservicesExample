import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Request,
  Param,
  Post,
} from '@nestjs/common';
import { ProjectService } from './projects.service';
import { TransformInterceptor } from '../../core/interceptors/transform-interceptor.util';
import { ApiTags } from '@nestjs/swagger';
import { TimeoutInterceptor } from '../../core/interceptors/timeout.interceptor';
import { SkipThrottle } from '@nestjs/throttler';
import { API_VERSION } from '../../core/constants';
import { Project } from './schemas/project.schema';

@SkipThrottle()
@ApiTags('projects')
@Controller(API_VERSION + 'projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @UseInterceptors(TransformInterceptor, TimeoutInterceptor)
  async getProjecs() {
    return await this.projectService.findAll();
  }

  @Post('crawler')
  @UseInterceptors(TransformInterceptor, TimeoutInterceptor)
  async crawlerProjects() {
    await this.projectService.crawlerData();
    return true;
  }
}
