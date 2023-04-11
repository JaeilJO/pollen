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
  position: relative;
  color: ${(props) =>
    props.nowRouter === props.href
      ? props.theme.PrimaryColor
      : props.theme.NonSelectColor};
  &:before {
    content: "";
    position: absolute;
    background-color: ${(props) =>
      props.nowRouter === props.href
        ? props.theme.PrimaryColor
        : props.theme.NonSelectColor};
    width: ${(props) => (props.nowRouter === props.href ? `100%` : `0`)};
    height: 5px;
    left: 0;
    bottom: -5px;
    transition: 320ms;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
