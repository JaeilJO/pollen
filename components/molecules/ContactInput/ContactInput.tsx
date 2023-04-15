import React, { useCallback, useState } from "react";
import {
  InputBox,
  InputContainer,
  PlaceHolderInInput,
} from "./ContactInput.styled";

const ContactInput = ({ placeHolder, type, name, register }) => {
  const [inputChange, setInputChange] = useState(false);

  const onChange = useCallback(
    (e) => {
      e.target.value ? setInputChange(true) : setInputChange(false);
    },
    [inputChange]
  );
  return (
    <InputContainer>
      <InputBox type={type} onChange={onChange} name={name} />
      <PlaceHolderInInput inputChange={inputChange}>
        {placeHolder}
      </PlaceHolderInInput>
    </InputContainer>
  );
};

export default ContactInput;
