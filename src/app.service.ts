/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import {
  GroupCategory,
  GroupCategoryDocument,
} from './schema/groupcategory.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(GroupCategory.name)
    private groupCategoryModel: Model<GroupCategoryDocument>,
  ) {}

  async create(body: any): Promise<GroupCategoryDocument> {
    console.log(
      '🚀 ~ file: user.service.ts:16 ~ UserService ~ create ~ body:',
      body,
    );
    // const user = new this.userModel({firstname: "baba", lastname : "dina", email : "baba.dina@gmail.com"})
    // user.save();
    const groupCategory = this.groupCategoryModel.create(body);
    return groupCategory;
  }

  async getAllByUserId(body: any): Promise<GroupCategoryDocument[]> {
    console.log(
      '🚀 ~ file: user.service.ts:16 ~ UserService ~ create ~ body:',
      body,
    );
    // const user = new this.userModel({firstname: "baba", lastname : "dina", email : "baba.dina@gmail.com"})
    // user.save();
    const groupCategories = await this.groupCategoryModel.find({userId:body});
    return groupCategories;
  }
}
