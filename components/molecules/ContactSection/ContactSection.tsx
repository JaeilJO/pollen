import React, { useCallback, useState } from "react";
import {
  ContactSectionContainer,
  ContactSectionForm,
  TextArea,
} from "./ContactSection.styled";
import ContactInput from "../ContactInput/ContactInput";
import ContactTextArea from "../ContactTextArea/ContactTextArea";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <ContactSectionForm onSubmit={handleSubmit(onSubmit)}>
      <div style={{ fontSize: "3rem", fontWeight: "700", color: "#E66E62" }}>
        CONTACT US
      </div>
      <ContactInput
        placeHolder={"Full Name"}
        name={"full_name"}
        type={"text"}
        register={register}
      />
      <ContactInput placeHolder={"Email"} type={"email"} name={"email"} />
      <ContactTextArea placeHolder={"Message"} name={"message"} />

      <button type={"submit"}>Submit</button>
    </ContactSectionForm>
  );
};

export default ContactSection;
