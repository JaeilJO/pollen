import styled from "styled-components";

export const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
`;

export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 200px;
  padding-top: 7px;
  padding-left: 5px;
  font-size: 1rem;
`;

export const PlaceHolderInTextArea = styled.span`
  position: absolute;
  transition: 320ms;
  left: 5px;
  top: ${(props) => (props.textAreaChage ? `-15px` : `10px`)};
  font-size: ${(props) => (props.textAreaChage ? `0.8rem` : `1rem`)};
  font-weight: ${(props) => (props.textAreaChage ? `800` : ``)};
  color: ${(props) =>
    props.textAreaChage ? props.theme.PrimaryColor : props.theme.BlackColor};
\` ;
  pointer-events: none;
`;
