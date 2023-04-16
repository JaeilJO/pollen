import React, { useCallback, useState } from "react";
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
      e.target.value ? setTextAreaChange(true) : setTextAreaChange(false);
      state.setInfo(name, e.target.value);
    },
    [textAreaChange]
  );
  return (
    <TextAreaContainer>
      <TextAreaBox onChange={onChange} name={name} />
      <PlaceHolderInTextArea textAreaChage={textAreaChange}>
        {placeHolder}
      </PlaceHolderInTextArea>
    </TextAreaContainer>
  );
};

export default ContactTextArea;
