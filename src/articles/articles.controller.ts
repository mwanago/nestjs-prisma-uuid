import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export default class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAll() {
    return this.articlesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.articlesService.getById(id);
  }

  @Post()
  create(@Body() article: CreateArticleDto) {
    return this.articlesService.create(article);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() article: UpdateArticleDto) {
    return this.articlesService.update(id, article);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.articlesService.delete(id);
  }
}
