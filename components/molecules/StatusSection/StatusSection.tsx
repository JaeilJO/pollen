import React from "react";
import {
  StatusBox,
  StatusButtonBox,
  StatusSectionContainer,
  StatusTextBox,
} from "./StatusSection.styled";

const StatusSection = () => {
  return (
    <StatusSectionContainer>
      <StatusBox>
        <StatusTextBox>Low</StatusTextBox>
        <StatusButtonBox>button</StatusButtonBox>
      </StatusBox>
    </StatusSectionContainer>
  );
};

export default StatusSection;
