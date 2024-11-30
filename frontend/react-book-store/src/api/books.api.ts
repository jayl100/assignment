import {httpClient} from "./http";
import {Book, BookDetail} from "../models/book.model";
import {Pagination} from "../models/pagenation.model";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  current_page?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {

  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params
    });

    return response.data;
  } catch (error) {

    return {
      books: [],
      pagination: {
        total_count: 0,
        current_page: 1,
      }
    }
  }
};

export const fetchBook = async (bookId: string) => {
  const response = await httpClient.get<BookDetail>(`/books/${bookId}`);

  return response.data;
}


export const likeBook = async (bookId: number) => {
  const response = await httpClient.post<BookDetail>(`/likes/${bookId}`);

  return response.data;
}


export const unLikeBook = async (bookId: number) => {
  const response = await httpClient.delete<BookDetail>(`/likes/${bookId}`);

  return response.data;
}

export const fetchBestBooks = async () => {
  const response = await httpClient.get<Book[]>(`/books/best`);
  return response.data;
}