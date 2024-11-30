import React from 'react';
import styled from 'styled-components';
import {BookDetail} from "../../models/book.model";
import Button from "../common/Button";
import {FaHeart} from "react-icons/fa6";

interface Props {
  book: BookDetail;
  onClick: () => void;
}

function LikeButton({book, onClick}: Props) {
  return (
    <LikeButtonStyled size='medium' scheme={book.liked_book_id ? 'like' : 'normal'} onClick={onClick}>
      <FaHeart/>
      {book.likes}
    </LikeButtonStyled>
  );
}

const LikeButtonStyled = styled(Button)`
    display: flex;
    gap: 6px;
    
    svg {
        color: inherit;
        * {
            color: inherit;
        }
    }
`;

export default LikeButton;