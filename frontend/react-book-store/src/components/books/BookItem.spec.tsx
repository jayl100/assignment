import React from "react";
import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";

const dummyBook = {
	id: 1,
	title: "Hello Book Title",
	img: 1,
	category_id: 2,
	summary: "Book Summary",
	author: "Book Author",
	price: 10000,
	likes: 65,
	form: "Book Form",
	isbn: "Book ISBN",
	detail: "Book Detail",
	pages: 1000,
	contents: "Book Contents",
	pub_date: "2024-11-11",
};

describe("BookItem", () => {
	it("렌더 여부", () => {
		const { getByText, getByAltText } = render(
			<BookStoreThemeProvider>
				<BookItem book={dummyBook} />
			</BookStoreThemeProvider>
		);
		
		expect(getByText(dummyBook.title)).toBeInTheDocument();
		expect(getByText(dummyBook.summary)).toBeInTheDocument();
		expect(getByText(dummyBook.author)).toBeInTheDocument();
		expect(getByText("10,000원")).toBeInTheDocument();
		expect(getByText(dummyBook.likes)).toBeInTheDocument();
		expect(getByAltText(dummyBook.title)).toHaveAttribute("src", `https://picsum.photos/id/${dummyBook.img}/600/600`);
	});
});
