import React from "react";
import { MainPageContainer } from "./MainPageContents.styled";
import StatusSection from "../../molecules/StatusSection/StatusSection";
import MainSection from "../../molecules/MainSection/MainSection";
import LocationSection from "../../molecules/LocationSection/LocationSection";

const MainPageContents = () => {
  return (
    <MainPageContainer>
      <LocationSection />
      <MainSection />
      <StatusSection />
    </MainPageContainer>
  );
};

export default MainPageContents;
