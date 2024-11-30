import styled from 'styled-components';
import {FaRegCircle} from "react-icons/fa6";
import {FaRegCheckCircle} from "react-icons/fa";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

function CheckIconButton({isChecked, onCheck}: Props) {
  return (
    <CheckIconButtonStyled onClick={onCheck}>
      {
        isChecked ? (<FaRegCheckCircle/>) : (<FaRegCircle/>)
      }
    </CheckIconButtonStyled>
  );
}

const CheckIconButtonStyled = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    
    svg {
        width: 24px;
        height: 24px;
    }
`;

export default CheckIconButton;