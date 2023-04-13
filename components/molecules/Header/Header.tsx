import React, { useEffect, useState } from "react";
import { HeaderContainer, Navigation, NavigationItem } from "./Header.styled";
import Logo from "../../atoms/Logo/Logo";
import { useRouter } from "next/router";

const Header = () => {
  const navigationItems = [
    { item_name: "Detail", href: "/detail" },
    { item_name: "Main", href: "/" },
    { item_name: "Contact", href: "/contact" },
  ];
  const router = useRouter();
  let now_router = router.pathname;

  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <Navigation>
          {navigationItems.map((item) => (
            <li key={item.item_name}>
              <NavigationItem now_router={now_router} href={item.href}>
                {item.item_name}
              </NavigationItem>
            </li>
          ))}
        </Navigation>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
