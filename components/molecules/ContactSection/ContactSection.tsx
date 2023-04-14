import React, { useState } from "react";
import {
  ContactSectionContainer,
  INPUT,
  InputBox,
  SPAN,
  TextArea,
} from "./ContactSection.styled";
import ContactInput from "../ContactInput/ContactInput";

const ContactSection = () => {
  const [b, setB] = useState(false);
  const a = (e) => {
    console.log();
    if (e.target.value) {
      setB(true);
    } else {
      setB(false);
    }
  };
  return (
    <ContactSectionContainer>
      <div style={{ fontSize: "3rem", fontWeight: "700", color: "#E66E62" }}>
        CONTACT US
      </div>
      <ContactInput placeHolder={"Full Name"} />
      <ContactInput placeHolder={"Email"} type={"email"} />
      <TextArea />
      <button>Hello</button>
    </ContactSectionContainer>
  );
};

export default ContactSection;
