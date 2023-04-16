import React, { useCallback, useRef, useState } from "react";
import { ContactSectionForm, TextArea } from "./ContactSection.styled";
import ContactInput from "../ContactInput/ContactInput";
import ContactTextArea from "../ContactTextArea/ContactTextArea";

const ContactSection = () => {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <ContactSectionForm onSubmit={onSubmit}>
      <div style={{ fontSize: "3rem", fontWeight: "700", color: "#E66E62" }}>
        CONTACT US
      </div>
      <ContactInput
        placeHolder={"Full Name"}
        name={"full_name"}
        type={"text"}
      />
      <ContactInput placeHolder={"Email"} type={"email"} name={"email"} />
      <ContactTextArea placeHolder={"Message"} name={"message"} />

      <button type={"submit"}>Submit</button>
    </ContactSectionForm>
  );
};

export default ContactSection;
