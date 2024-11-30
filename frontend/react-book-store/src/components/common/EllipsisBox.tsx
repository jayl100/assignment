import React, {useState} from 'react';
import styled from 'styled-components';
import Button from "./Button";
import {FaAngleDown} from "react-icons/fa6";

interface Props {
  children: React.ReactNode;
  lineLimit: number;
}

function EllipsisBox({children, lineLimit}: Props): JSX.Element {

  const [expanded, setExpanded] = useState(false);

  return (
    <EllipsisBoxStyled
      lineLimit={lineLimit}
      $expanded={expanded}>
      <p>{children}</p>
      <div className="toggle">
        <Button size='small' scheme='normal' onClick={() => {
          setExpanded(!expanded);
        }}>
          {expanded ? '접기' : '펼치기'} <FaAngleDown/></Button>
      </div>
    </EllipsisBoxStyled>
  )
    ;
}

interface EllipsisBoxStyledProps {
  lineLimit: number;
  $expanded: boolean;
}

const EllipsisBoxStyled = styled.div<EllipsisBoxStyledProps>`
    p {
        overflow: hidden;

        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${({lineLimit, $expanded}) => $expanded ? 'none' : lineLimit};
        -webkit-box-orient: vertical;
        padding: 20px 0 0 0;
        margin: 0;
    }

    .toggle {
        display: flex;
        justify-content: end;

        svg {
            transform: ${({$expanded}) => $expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
        }
    }
`;

export default EllipsisBox;