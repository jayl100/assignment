export interface Order {
  order_id: number;
  created_at: string;
  address: string;
  receiver: string;
  contact: string;
  book_title: string;
  total_quantity: number;
  total_price: number;
}

export interface OrderSheet {
  items: number[];
  total_quantity: number;
  total_price: number;
  first_book_title: string;
  delivery: Delivery
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderDetailItem {
  book_id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface OrderListItem extends Order {
  detail?: OrderDetailItem[];
}