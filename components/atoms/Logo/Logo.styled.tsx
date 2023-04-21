import styled from "styled-components";


export const LogoContainer = styled.div`
  font-size: 3rem;
  font-weight: 700;
  
  color: ${(props) => props.theme.Color.Primary};
  transition: 280ms;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
