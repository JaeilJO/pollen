import React from "react";
import { MainSectionContainer } from "./MainSection.styled";
import Image from "next/image";

const MainSection = () => {
  return (
    <MainSectionContainer>
      <Image src={"/1.png"} width={500} height={500} />
    </MainSectionContainer>
  );
};

export default MainSection;
