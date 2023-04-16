import React, { useCallback, useRef, useState } from "react";
import {
  InputBox,
  InputContainer,
  PlaceHolderInInput,
} from "./ContactInput.styled";
import { useForm } from "../../../store/store";

const ContactInput = ({ placeHolder, type, name }) => {
  const [inputChange, setInputChange] = useState(false);
  const state = useForm();
  const onChange = useCallback(
    (e) => {
      e.target.value ? setInputChange(true) : setInputChange(false);
      state.setInfo(name, e.target.value);
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
