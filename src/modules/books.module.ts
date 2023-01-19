import { Module } from '@nestjs/common';
import { BooksController } from 'src/controllers/books.controller';
import { BooksService } from 'src/services/books.service';
import { DatabaseModule } from 'src/database/modules/database.module';
import { bookProviders } from 'src/database/providers/book.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, ...bookProviders], 
})

export class BooksModule {}
