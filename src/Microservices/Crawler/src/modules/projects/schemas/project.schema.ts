import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AutoMap } from '@automapper/classes';

export type ProjectDocument = Project & Document;

@Schema({ versionKey: false })
export class Project {
  @AutoMap()
  @Prop()
  title: string;

  @AutoMap()
  @Prop()
  price: string;

  @AutoMap()
  @Prop()
  location: string;

  @AutoMap()
  @Prop()
  area: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
