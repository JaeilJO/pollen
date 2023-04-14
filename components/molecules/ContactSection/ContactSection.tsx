import React, { useState } from "react";
import { ContactSectionContainer, TextArea } from "./ContactSection.styled";
import ContactInput from "../ContactInput/ContactInput";
import ContactTextArea from "../ContactTextArea/ContactTextArea";

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <div style={{ fontSize: "3rem", fontWeight: "700", color: "#E66E62" }}>
        CONTACT US
      </div>
      <ContactInput placeHolder={"Full Name"} />
      <ContactInput placeHolder={"Email"} type={"email"} />
      <ContactTextArea placeHolder={"Message"} />

      <button type={"submit"}>Submit</button>
    </ContactSectionContainer>
  );
};

export default ContactSection;
