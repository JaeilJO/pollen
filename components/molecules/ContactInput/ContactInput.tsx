import React, { useCallback, useEffect, useRef, useState } from "react";
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
      e.preventDefault();
      e.target.value ? setInputChange(true) : setInputChange(false);
      state.setInfo(name, e.target.value);
    },
    [inputChange]
  );
  useEffect(() => {
    state.info?.[name] === "" ? setInputChange(false) : setInputChange(true);
  });

  return (
    <InputContainer>
      <InputBox
        type={type}
        onChange={onChange}
        name={name}
        value={state.info?.[name]}
      />
      <PlaceHolderInInput inputChange={inputChange}>
        {placeHolder}
      </PlaceHolderInInput>
    </InputContainer>
  );
};

export default ContactInput;
