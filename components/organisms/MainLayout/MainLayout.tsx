import React from "react";
import { BackGround, Main } from "./MainLayout.styled";
import Header from "../../molecules/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <BackGround>
      <Header />
      {children}
    </BackGround>
  );
};

export default MainLayout;
