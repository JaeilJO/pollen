import React, { useCallback, useRef, useState } from "react";
import {
  PlaceHolderInTextArea,
  TextAreaBox,
  TextAreaContainer,
} from "./ContactTextArea.styled";

const ContactTextArea = ({ placeHolder, name }) => {
  const [textAreaChange, setTextAreaChange] = useState(false);
  const ref = useRef();
  const onFocus = useCallback(() => {
    setTextAreaChange(true);
  }, []);

  const onBlur = useCallback(() => {
    if (ref.current?.value === "") {
      setTextAreaChange(false);
    }
  }, []);

  return (
    <TextAreaContainer>
      <TextAreaBox name={name} ref={ref} onFocus={onFocus} onBlur={onBlur} />
      <PlaceHolderInTextArea textAreaChage={textAreaChange}>
        {placeHolder}
      </PlaceHolderInTextArea>
    </TextAreaContainer>
  );
};

export default ContactTextArea;
