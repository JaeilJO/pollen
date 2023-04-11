import React from "react";
import { MainPageContainer } from "./MainPageContents.styled";
import StatusSection from "../../molecules/StatusSection/StatusSection";
import MainSection from "../../molecules/MainSection/MainSection";

const MainPageContents = () => {
  return (
    <MainPageContainer>
      <StatusSection />
      <MainSection />
      <StatusSection />
    </MainPageContainer>
  );
};

export default MainPageContents;
