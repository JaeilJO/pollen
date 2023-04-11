import React, { useEffect, useState } from "react";
import { HeaderContainer, Navigation, NavigationItem } from "./Header.styled";
import Logo from "../../atoms/Logo/Logo";

const Header = () => {
  const navigationItems = ["Detail", "Main", "Contact"];

  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <Navigation>
          {navigationItems.map((item) => (
            <li key={item}>
              <NavigationItem href={""}>{item}</NavigationItem>
            </li>
          ))}
        </Navigation>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
