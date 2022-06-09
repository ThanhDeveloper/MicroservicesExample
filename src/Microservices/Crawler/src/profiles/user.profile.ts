import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { User } from '../modules/users/schemas/user.schema';
import { mapFrom } from '@automapper/core';
import { RegisterUserDto } from '../modules/auth/dto/register-user.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      //dto => schema
      mapper.createMap(RegisterUserDto, User).forMember(
        (destination) => destination.create_at,
        mapFrom(() => new Date()),
      );
      //other mapper here
    };
  }
}
