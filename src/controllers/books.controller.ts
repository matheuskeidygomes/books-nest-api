import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { BooksService } from 'src/services/books.service';

@Controller('books')

export class BooksController {

  constructor(private readonly booksService: BooksService) { }

  @Get()
  Books(): Promise<any> {
    return this.booksService.getBooks();
  }

  @Get(':id')
  Book(@Param('id') id): Promise<any> {
    return this.booksService.getBook(id);
  }

  @Post()
  async createBook(@Body() book: any, @Res() res): Promise<any> {
    const newBook = await this.booksService.createBook(book);
    return res.status(201).json({
      message: 'Book successfully created',
      post: newBook,
    });
  }

  @Put(':id')
  async updateBook(@Param('id') id, @Body() book: any, @Res() res): Promise<any> {
    const updatedBook = await this.booksService.updateBook(id, book);
    return res.status(201).json({
      message: 'Book successfully updated',
      post: updatedBook,
    });
  }

  @Delete(':id')
  async deleteBook(@Param('id') id, @Res() res): Promise<any> {
    const deletedBook = await this.booksService.deleteBook(id);
    return res.status(201).json({
      message: 'Book successfully deleted',
      post: deletedBook,
    });
  }



}
