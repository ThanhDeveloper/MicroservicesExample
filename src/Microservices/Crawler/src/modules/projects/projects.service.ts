import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly model: Model<ProjectDocument>,
    @InjectMapper() private readonly Mapper: Mapper,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.model.findOne({ _id: id }).exec();
  }

  async crawlerData() {
    await this.model.db.dropCollection('projects');
    const URL = 'https://alonhadat.com.vn/nha-dat/can-ban.html';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);
    const results = await page.evaluate(() => {
      const propertyList = [];
      document.querySelectorAll('.content-item').forEach((z) => {
        const data = {
          title: z.querySelector('div > .ct_title > a').textContent,
          price: z
            .querySelector('.text > .price-dis > .ct_price')
            .textContent.substring(5),
          location: z.querySelector('.text > .price-dis > .ct_dis').textContent,
          area: z
            .querySelector('.text > .square-direct > .ct_dt')
            .textContent.substring(11),
        };
        propertyList.push(data);
      });
      return propertyList;
    });
    results.forEach(async (element) => {
      await new this.model({
        title: element.title,
        price: element.price,
        location: element.location,
        area: element.area,
      }).save();
    });
    await browser.close();
    return true;
  }
}
