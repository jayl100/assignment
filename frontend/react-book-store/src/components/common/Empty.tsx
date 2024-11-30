import styled from 'styled-components';
import {FaSmileWink} from "react-icons/fa";
import Title from "./Title";
import {Link} from "react-router-dom";
import React from "react";

interface Props {
  icon? : React.ReactNode;
  title: string;
  description?: React.ReactNode;
}

function Empty({icon, title, description}:Props) {
  return (
    <EmptyStyled>
      {icon && <div className='icon'>{icon}</div>}

      <Title size='large' color='secondary'>
        {title}
      </Title>
      {description && <p>{description}</p>}
    </EmptyStyled>
  );
}

const EmptyStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 120px 0;

    .icon {
        svg {
            font-size: 4rem;
            fill: #ccc;
        }
    }
`;

export default Empty;