import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  InputBox,
  InputContainer,
  PlaceHolderInInput,
} from "./ContactInput.styled";

const ContactInput = ({ placeHolder, type, name }) => {
  const [inputChange, setInputChange] = useState(false);
  const ref = useRef();

  const onFocus = useCallback(() => {
    setInputChange(true);
  }, []);

  const onBlur = useCallback(() => {
    if (ref.current?.value === "") {
      setInputChange(false);
    }
  }, []);

  return (
    <InputContainer>
      <InputBox
        type={type}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
      />
      {console.log("render")}
      <PlaceHolderInInput inputChange={inputChange}>
        {placeHolder}
      </PlaceHolderInInput>
    </InputContainer>
  );
};

export default ContactInput;
