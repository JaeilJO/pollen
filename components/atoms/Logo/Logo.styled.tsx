import styled from "styled-components";


export const LogoContainer = styled.div`
  font-size: ${(props) => props.theme.Font.xl.size};
  font-weight: ${(props) => props.theme.Font.xl.weight};
  color: ${(props) => props.theme.Color.Primary};
  transition: 280ms;

  @media screen and (max-width: 500px) {
    font-size: ${(props) => props.theme.Font.lg.size};
  }
`;
