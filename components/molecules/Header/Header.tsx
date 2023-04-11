import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationItem,
} from "./Header.styled";
import { useRouter } from "next/router";

const Header = () => {
  const navigationItems = ["Detail", "Main", "Contact"];
  const [activeButton, setActiveButton] = useState("Main");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setActiveButton("Main");
    } else if (router.pathname === "detail") {
      setActiveButton("Detail");
    } else if (router.pathname === "contact") {
      setActiveButton("Contact");
    }
  }, []);

  return (
    <HeaderContainer>
      <Logo>ETchii</Logo>
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
