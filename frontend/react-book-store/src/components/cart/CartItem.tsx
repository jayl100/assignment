import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Cart} from "../../models/cart.model";
import Button from "../common/Button";
import Title from "../common/Title";
import {formatNumber} from "../../utils/format";
import CheckIconButton from "./CheckIconButton";
import {useAlert} from "../../hooks/useAlert";

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

function CartItem({cart, checkedItems, onCheck, onDelete}: Props) {
  const {showConfirm} = useAlert();


  // checkedItems 목록에 내가 있는지 판단 = checked
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handelCheck = () => {
    onCheck(cart.id);
  }

  const handleDelete = () => {
    // confirm ? 취소 : 삭제
    showConfirm('삭제하시겠습니까?', () => {
      onDelete(cart.id);

    })
  }

  return (
    <CartItemStyled>
      <div className="info">
        <div className='check'><CheckIconButton isChecked={isChecked} onCheck={handelCheck}/></div>
        <div>
          <Title size='medium' color='text'>{cart.title}</Title>
          <p className="summary">{cart.summary}</p>
          <p className="price">{formatNumber(cart.price)}원</p>
          <p className="quantity">{cart.quantity}</p>
        </div>
      </div>
      <Button size='medium' scheme='normal' onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyled>
  );
}

const CartItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    border: 1px solid ${({theme}) => theme.color.border};
    border-radius: 1px solid ${({theme}) => theme.borderRadius};
    padding: 12px;

    
    
    .info {
        display: flex;
        align-items: start;
        flex: 1;

        .check {
            width: 40px;
            flex-shrink: 0;
        }
        
    p {
        padding: 0 0 8px 0;
        margin: 0;
    }
    }
`;

export default CartItem;