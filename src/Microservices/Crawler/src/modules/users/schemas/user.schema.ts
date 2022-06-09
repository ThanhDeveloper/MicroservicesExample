import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AutoMap } from '@automapper/classes';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {
  @AutoMap()
  @Prop()
  username: string;

  @AutoMap()
  @Prop()
  password: string;

  @AutoMap()
  @Prop()
  create_at: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
