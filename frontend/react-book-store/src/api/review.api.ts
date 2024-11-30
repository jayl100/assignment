import { BookReviewItem, BookReviewItemWrite } from "../models/book.model";
import { requestHandler } from "./http";

export const fetchBookReview = async (bookId: string) => {
	return await requestHandler<BookReviewItem[]>('GET', `/reviews/${bookId}`);
};

interface AddBookReviewResponse {
	message: string;
}

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
	return await requestHandler<AddBookReviewResponse>('POST', `/reviews/${bookId}`);
};

export const fetchReviewAll = async () => {
	return await requestHandler<BookReviewItem[]>('GET', '/reviews');
};
