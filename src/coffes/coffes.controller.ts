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

@Controller('coffes')
export class CoffesController {
  // get请求获取数据
  @Get('flavors')
  findAll(@Res() response): string {
    return 'This actions returns all coffes';
  }

  // get请求获取id数据
  @Get('/getId:id')
  findOne(@Param('id') id: string): string {
    return `This actions returns #${id} coffes`;
  }

  // post请求
  @Post()
  getPost(@Body() body) {
    return body;
  }

  // patch更新
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This actions update #${id} coffes ，body ${body.name}`;
  }
  // delete删除
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This actions delete #${id} coffes`;
  }

  //  get请求分页
  @Get('pages')
  pages(@Query() pagination) {
    const { pageNum, pageSize } = pagination;
    return `This action pages coffes ,pageNum is ${pageNum};pageSize is ${pageSize}`;
  }
}
