import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 100px;

  align-items: center;
  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: 900;
  font-family: "NanumGothic";
  transition: 280ms;
  color: ${(props) => props.theme.PrimaryColor};
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 40px;
  transition: 280ms;
  @media screen and (max-width: 500px) {
    gap: 30px;
  }
`;

export const NavigationItem = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;

  ${(props) =>
    props.activeButton === props.item
      ? `border-bottom : 5px solid ${props.theme.PrimaryColor};`
      : ``}
  color: ${(props) =>
    props.activeButton === props.item
      ? props.theme.PrimaryColor
      : props.theme.NonSelectColor};
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
