import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InvalidArgumentException } from '../../core/utils/error-handler.util';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await AuthService.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user['_doc'];
    return result;
  }

  public async login(user) {
    const token = await this.generateToken(user);
    return {
      id: user._id,
      username: user.username,
      message: 'successfully logged',
      token,
    };
  }

  public async register(registerUserDto: RegisterUserDto) {
    const userExist = await this.userService.findOneByUsername(
      registerUserDto.username,
    );
    if (userExist) {
      throw new InvalidArgumentException('This username already exist');
    }

    // hash the password
    const hashedPassword = await AuthService.hashPassword(
      registerUserDto.password,
    );

    // create the user
    const newUser = await this.userService.create({
      ...registerUserDto,
      password: hashedPassword,
    });

    // tslint:disable-next-line: no-string-literal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser['_doc'];
    //
    // // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return {
      id: result._id,
      username: result.username,
      message: 'Register success',
      token,
    };
  }

  private async generateToken(user) {
    return await this.jwtService.signAsync(user);
  }

  private static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }

  private static async comparePassword(enteredPassword, dbPassword) {
    return await bcrypt.compare(enteredPassword, dbPassword);
  }
}
