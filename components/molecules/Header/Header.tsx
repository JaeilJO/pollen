import React, { useEffect, useState } from "react";
import { HeaderContainer, Navigation, NavigationItem } from "./Header.styled";
import Logo from "../../atoms/Logo/Logo";

const Header = () => {
  const navigationItems = [
    { item_name: "Detail", href: "detail" },
    { item_name: "Main", href: "/" },
    { item_name: "Contact", href: "contact" },
  ];

  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <Navigation>
          {navigationItems.map((item) => (
            <li key={item.item_name}>
              <NavigationItem href={item.href}>{item.item_name}</NavigationItem>
            </li>
          ))}
        </Navigation>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
