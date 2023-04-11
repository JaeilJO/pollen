import styled from "styled-components";

export const LogoContainer = styled.div`
  font-size: 3rem;
  font-weight: 900;
  font-family: "Nanum BaReunHiPi";
  color: ${(props) => props.theme.PrimaryColor};
  transition: 280ms;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
