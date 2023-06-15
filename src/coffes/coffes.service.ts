import { Injectable } from '@nestjs/common';
import { Coffe } from './entities/coffes.entity';

@Injectable()
export class CoffesService {
  private coffes: Coffe[] = [
    {
      id: 1,
      name: 'shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffes;
  }

  findOne(id) {
    return this.coffes?.find((item) => item?.id === +id);
  }

  create(body) {
    return this.coffes.push(body);
  }

  update(id: number, body: any) {
    const existingCoffe = this.findOne(+id);
    if (existingCoffe) {
      return this.findAll()?.map((item) => {
        if (item?.id === +id) {
          return { ...item, ...body };
        } else {
          return item;
        }
      });
    } else {
      return '不存在';
    }
  }

  delete(id: number) {
    const coffeIndex = this.coffes?.findIndex((item) => item?.id === +id);
    if (coffeIndex >= 0) {
      this.coffes.splice(coffeIndex, 1);
    }
  }
}
