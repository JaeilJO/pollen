import React from "react";
import { MainSectionContainer, StatusImage } from "./MainSection.styled";
import Image from "next/image";

const MainSection = () => {
  return (
    <MainSectionContainer>
      <StatusImage src={"/null.png"} width={500} height={500} />
    </MainSectionContainer>
  );
};

export default MainSection;
