import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UsersService,
      useFactory: () => ({
        findAll: jest.fn(() => []),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          options: [{ name: 'classMapper', pluginInitializer: classes }],
          singular: true,
        }),
      ],
      controllers: [UsersController],
      providers: [UsersService, ApiServiceProvider],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('service should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
