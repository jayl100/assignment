import React from 'react';
import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksEmpty from "../components/books/BooksEmpty";
import {useBooks} from "../hooks/useBooks";

const Books = () => {
  const {books, pagination, isEmpty} = useBooks();

  return (
    <>
      <Title size='large'>도서 검색 결과</Title>
      <BooksStyled>
        <div className='filter'>
          <BooksFilter/>
          <BooksViewSwitcher/>
        </div>
        {!isEmpty && <BooksList books={books}/>}
        {!isEmpty && <Pagination pagination={pagination}/>}
        {isEmpty && <BooksEmpty/>}
      </BooksStyled>
    </>
  );
};

const BooksStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    
    .filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`;

export default Books;
