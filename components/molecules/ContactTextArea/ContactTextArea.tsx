import React, { useCallback, useState } from "react";
import {
  PlaceHolderInTextArea,
  TextAreaBox,
  TextAreaContainer,
} from "./ContactTextArea.styled";

const ContactTextArea = ({ placeHolder }) => {
  const [textAreaChange, setTextAreaChange] = useState(false);
  const onChange = useCallback(
    (e) => {
      e.target.value ? setTextAreaChange(true) : setTextAreaChange(false);
    },
    [textAreaChange]
  );
  return (
    <TextAreaContainer>
      <TextAreaBox onChange={onChange} />
      <PlaceHolderInTextArea textAreaChage={textAreaChange}>
        {placeHolder}
      </PlaceHolderInTextArea>
    </TextAreaContainer>
  );
};

export default ContactTextArea;
