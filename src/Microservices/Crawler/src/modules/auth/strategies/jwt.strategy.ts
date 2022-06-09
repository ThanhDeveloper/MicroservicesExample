import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWTKEY } from '../../../core/constants';
import { UnauthorizedException } from '../../../core/utils/error-handler.util';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWTKEY,
    });
  }

  async validate(payload: any) {
    // check if user in the token actually exist
    const user = await this.userService.findOneById(payload._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}