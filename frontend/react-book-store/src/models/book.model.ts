export interface Book {
  id: number;
  title: string;
  img: number;
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pub_date: string;
  likes: number;
}

export interface BookDetail extends Book {
  category_name: string;
  liked_book_id: boolean;
  user_id: number;
}

export interface BookReviewItem {
  id: number;
  user_name: string;
  created_at:string;
  content: string;
  score: number;
}

export type BookReviewItemWrite = Pick<BookReviewItem, 'content' | 'score'>;
