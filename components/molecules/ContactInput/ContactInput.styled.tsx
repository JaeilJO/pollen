import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

export const InputBox = styled.input`
  font-size: ${(props) => props.theme.Font.md.size};
  padding: 6px 5px;
  border: none;
  box-shadow: none;
  background: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const PlaceHolderInInput = styled.span`
  position: absolute;
  transition: 320ms;
  left: 5px;
  top: ${(props) => (props.inputChange ? `-15px` : `10px`)};
  font-size: ${(props) => (props.inputChange ? props.theme.Font.sm.size : props.theme.Font.md.size)};
  pointer-events: none;
  font-weight: ${(props) => (props.inputChange ? props.theme.Font.md.weight : props.theme.Font.sm.weight)};
  color: ${(props) =>
    props.inputChange ? props.theme.Color.Primary : props.theme.Color.Black};
\` ;
`;
