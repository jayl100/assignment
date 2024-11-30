import { requestHandler } from './http';
import { Order, OrderDetailItem, OrderSheet } from '../models/order.model';

export const order = async(orderData: OrderSheet) => {
	return await requestHandler<undefined, OrderSheet>('POST', '/orders', orderData);
}

export const fetchOrders = async () => {
	return await requestHandler<Order[]>('GET', '/orders');
}

export const fetchOrder = async (orderId: number) => {
	return await requestHandler<OrderDetailItem[]>('GET', `/orders/${orderId}`);
}