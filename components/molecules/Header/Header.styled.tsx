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
    props.nowRouter === props.href ? props.theme.PrimaryColor : `black`};
  &:before {
    display: ${(props) => (props.nowRouter === props.href ? `` : `none`)};
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.PrimaryColor};
    width: 100%;
    height: 5px;
    bottom: -5px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
