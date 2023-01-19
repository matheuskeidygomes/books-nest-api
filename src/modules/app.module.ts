import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books.module';
import { DatabaseModule } from 'src/database/modules/database.module';

@Module({
  imports: [BooksModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})

export class AppModule { }
