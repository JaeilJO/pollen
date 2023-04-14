import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

export const InputBox = styled.input`
  font-size: 1rem;
  padding: 6px 5px;
  border: none;
  box-shadow: none;
  background: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const PlaceHolder = styled.span`
  position: absolute;
  transition: 320ms;
  left: 5px;
  top: ${(props) => (props.inputChange ? `-15px` : `10px`)};
  font-size: ${(props) => (props.inputChange ? `0.8rem` : `1rem`)};
  pointer-events: none;
  font-weight: ${(props) => (props.inputChange ? `800` : ``)};
  color: ${(props) =>
    props.inputChange ? props.theme.PrimaryColor : props.theme.BlackColor};
\` ;
`;
