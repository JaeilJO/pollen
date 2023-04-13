import React, { useState } from "react";
import {
  ContactSectionContainer,
  INPUT,
  InputBox,
  SPAN,
  TextArea,
} from "./ContactSection.styled";

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
      <InputBox>
        <INPUT onChange={a} />
        <SPAN b={b}>Full Name</SPAN>
      </InputBox>

      <INPUT placeholder={"Email"} />
      <TextArea />
      <button>Hello</button>
    </ContactSectionContainer>
  );
};

export default ContactSection;
