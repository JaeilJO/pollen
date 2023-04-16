import React, { useCallback, useEffect, useState } from "react";
import {
  PlaceHolderInTextArea,
  TextAreaBox,
  TextAreaContainer,
} from "./ContactTextArea.styled";
import { useForm } from "../../../store/store";

const ContactTextArea = ({ placeHolder, name }) => {
  const [textAreaChange, setTextAreaChange] = useState(false);
  const state = useForm();
  const onChange = useCallback(
    (e) => {
      e.preventDefault();
      e.target.value || state.info.message === ""
        ? setTextAreaChange(true)
        : setTextAreaChange(false);
      state.setInfo(name, e.target.value);
    },
    [textAreaChange]
  );
  useEffect(() => {
    state.info.message === ""
      ? setTextAreaChange(false)
      : setTextAreaChange(true);
  });

  return (
    <TextAreaContainer>
      <TextAreaBox onChange={onChange} name={name} value={state.info.message} />
      <PlaceHolderInTextArea textAreaChage={textAreaChange}>
        {placeHolder}
      </PlaceHolderInTextArea>
    </TextAreaContainer>
  );
};

export default ContactTextArea;
