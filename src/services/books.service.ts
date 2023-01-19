import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from 'src/database/interfaces/book.interface';

@Injectable()       

export class BooksService {

    constructor(
        @Inject('BOOK_MODEL')
        private bookModel: Model<Book>,
      ) {}


    async getBooks(): Promise<any> {            
        return this.bookModel.find().exec();
    }

    async getBook(bookID: number): Promise<any> {
        return this.bookModel.findById(bookID).exec();
    }

    async createBook(book: Book): Promise<any> {
        const newBook = new this.bookModel(book);
        return await newBook.save();
    }

    async updateBook(bookID: number, book: Book): Promise<any> {
        return await this.bookModel.findByIdAndUpdate(bookID, book, { new: true });
    }

    async deleteBook(bookID: number): Promise<any> {
        return await this.bookModel.findByIdAndRemove(bookID);
    }
    

}
