import {httpClient} from "./http";
import {Book} from "../models/book.model";
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
