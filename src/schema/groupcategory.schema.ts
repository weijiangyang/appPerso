/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GroupCategoryDocument = GroupCategory & Document;

@Schema({ collection: 'groupCategories', timestamps: true, versionKey: false })
export class GroupCategory {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  userId: number;
}

export const GroupCategorytSchema = SchemaFactory.createForClass(GroupCategory);
