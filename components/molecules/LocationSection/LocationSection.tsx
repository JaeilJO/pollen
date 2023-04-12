import React from "react";
import {
  LocationBox,
  LocationButtonBox,
  LocationSectionContainer,
  LocationTextBox,
} from "./LocationSection.styled";
import { GrLocation } from "react-icons/gr";

const LocationSection = () => {
  return (
    <LocationSectionContainer>
      <LocationBox>
        <LocationTextBox>Seoul</LocationTextBox>
        <LocationButtonBox>
          <GrLocation />
          <span>Set Location</span>
        </LocationButtonBox>
      </LocationBox>
    </LocationSectionContainer>
  );
};

export default LocationSection;
