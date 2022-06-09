import { AutoMap } from '@automapper/classes';

export class LoggedInUserDto {
  @AutoMap()
  id: number;
  @AutoMap()
  username: string;
}
