import { Book } from '../models/book.model';
import { http, HttpResponse } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

const bestBooksData: Book[] = Array.from({ length: 10 }).map((item, index) => ({
	id: index,
	title: faker.lorem.sentence(),
	img: faker.number.int({ min: 100, max: 200 }),  // 수정된 부분
	category_id: faker.number.int({ min: 0, max: 2 }),  // 수정된 부분
	form: '종이책',
	isbn: faker.commerce.isbn(),
	summary: faker.lorem.paragraph(),
	detail: faker.lorem.paragraph(),
	author: faker.person.firstName(),
	pages: faker.number.int({ min: 100, max: 500 }),  // 수정된 부분
	contents: faker.lorem.paragraph(),
	price: faker.number.int({ min: 10000, max: 50000 }),  // 수정된 부분
	likes: faker.number.int({ min: 0, max: 100 }),  // 수정된 부분
	pub_date: faker.date.past().toISOString(),
}));

export const bestBooks = http.get('http://localhost:9000/books/best', () => {
	return HttpResponse.json(bestBooksData, {
		status: 200,
	});
});
