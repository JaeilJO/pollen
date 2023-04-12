import React from "react";
import {
  StatusBox,
  StatusButton,
  StatusButtonBox,
  StatusSectionContainer,
  StatusTextBox,
} from "./StatusSection.styled";
import { GrRefresh } from "react-icons/gr";

const StatusSection = () => {
  return (
    <StatusSectionContainer>
      <StatusBox>
        <StatusTextBox>Low</StatusTextBox>
        <StatusButtonBox>
          <StatusButton>
            <GrRefresh color="blue" />
          </StatusButton>
        </StatusButtonBox>
      </StatusBox>
    </StatusSectionContainer>
  );
};

export default StatusSection;
