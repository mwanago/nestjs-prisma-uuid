import { NotFoundException } from "@nestjs/common";

export class ArticleNotFoundException extends NotFoundException {
  constructor(articleId: string) {
    super(`Article with id ${articleId} not found`);
  }
}
