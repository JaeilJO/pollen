import React from "react";
import ContactSection from "../../molecules/ContactSection/ContactSection";
import { ContactPageContainer } from "./ContactPageContents.styled";

const ContactPageContents = () => {
  return (
    <>
      <ContactPageContainer>
        <ContactSection />
      </ContactPageContainer>
    </>
  );
};

export default ContactPageContents;
