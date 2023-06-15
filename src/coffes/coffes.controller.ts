import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffesService } from './coffes.service';
import { Coffe } from './entities/coffes.entity';

@Controller('coffes')
export class CoffesController {
  constructor(private readonly CoffesService: CoffesService) {}
  // get请求获取数据
  @Get()
  findAll(): Coffe[] {
    // return 'This actions returns all coffes';
    return this?.CoffesService?.findAll();
  }

  // get请求获取id数据
  @Get(':id')
  findOne(@Param('id') id: string): Coffe {
    // return `This actions returns #${id} coffes`;
    return this?.CoffesService?.findOne(id);
  }

  // post请求
  @Post()
  create(@Body() body) {
    return this?.CoffesService?.create(body);
  }

  // patch更新
  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    // return `This actions update #${id} coffes ，body ${body.name}`;
    return this?.CoffesService?.update(id, body);
  }
  // delete删除
  @Delete(':id')
  delete(@Param('id') id: string) {
    // return `This actions delete #${id} coffes`;
    return this?.CoffesService?.delete(+id);
  }

  //  get请求分页
  @Get('pages')
  pages(@Query() pagination) {
    const { pageNum, pageSize } = pagination;
    return `This action pages coffes ,pageNum is ${pageNum};pageSize is ${pageSize}`;
  }
}
