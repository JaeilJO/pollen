import React from "react";
import {
  LocationBox,
  LocationButtonBox,
  LocationSectionContainer,
  LocationTextBox,
} from "./LocationSection.styled";

const LocationSection = () => {
  return (
    <LocationSectionContainer>
      <LocationBox>
        <LocationTextBox>Seoul</LocationTextBox>
        <LocationButtonBox>Hello</LocationButtonBox>
      </LocationBox>
    </LocationSectionContainer>
  );
};

export default LocationSection;
