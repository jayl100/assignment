import React, {useState} from 'react';
import styled from 'styled-components';
import {Pagination as IPagination} from "../../models/pagenation.model";
import {LIMIT} from "../../constants/pagination";
import Button from "../common/Button";
import {useSearchParams} from "react-router-dom";
import {QUERYSTRING} from "../../constants/querystring";

interface Props {
  pagination: IPagination;
}

function Pagination({pagination}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const {total_count, current_page} = pagination;
  const pages: number = Math.ceil(total_count / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  };

  return (
    <PaginationStyled>
      {
        pages > 0 && (
          <ol>
            {
              Array(pages).fill(0).map((_, i) => (
                <li>
                  <Button
                    key={i}
                    size='small'
                    scheme={i + 1 === current_page ? 'primary' : 'normal'}
                    onClick={() => handleClickPage(i + 1)}>
                    {i + 1}
                  </Button>
                </li>
              ))
            }
          </ol>
        )
      }
    </PaginationStyled>
  );
}

const PaginationStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 24px 0;

    ol {
        list-style: none;
        display: flex;
        gap: 8px;
        padding: 0;
        margin: 0;
    }
`;

export default Pagination;