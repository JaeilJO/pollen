import React, { useCallback, useState } from "react";
import { InputBox, InputContainer, PlaceHolder } from "./ContactInput.styled";

const ContactInput = ({ placeHolder, type }) => {
  const [inputChange, setInputChange] = useState(false);
  const onChange = useCallback(
    (e) => {
      e.target.value ? setInputChange(true) : setInputChange(false);
    },
    [inputChange]
  );
  return (
    <InputContainer>
      <InputBox type={type} onChange={onChange} />
      <PlaceHolder inputChange={inputChange}>{placeHolder}</PlaceHolder>
    </InputContainer>
  );
};

export default ContactInput;
