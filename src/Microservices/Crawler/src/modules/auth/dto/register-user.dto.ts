import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
export class RegisterUserDto {
  @AutoMap()
  @ApiProperty()
  username: string;

  @AutoMap()
  @ApiProperty()
  password: string;
}
