import styled from "styled-components";

export const ContactSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
`;

export const INPUT = styled.input`
  font-size: 1rem;
  padding: 6px 5px;
  border: none;
  box-shadow: none;
  background: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 6px 5px;
  height: 200px;

  border-bottom: 1px solid black;
  outline: none;
`;

export const SPAN = styled.span`
  position: absolute;
  transition: 320ms;
  left: 5px;
  top: ${(props) => (props.b ? `-15px` : `10px`)};
  font-size: ${(props) => (props.b ? `0.8rem` : `1rem`)};
  pointer-events: none;
  font-weight: ${(props) => (props.b ? `800` : ``)};
  color: ${(props) =>
    props.b ? props.theme.PrimaryColor : props.theme.BlackColor};
`;
