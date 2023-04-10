import React from "react";
import { BackGround, Main } from "./MainLayout.styled";
import Header from "../../molecules/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <BackGround>
      <Header />
      <Main>{children}</Main>
    </BackGround>
  );
};

export default MainLayout;
