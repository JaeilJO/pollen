import styled from "styled-components";
import Image from "next/image";

export const MainSectionContainer = styled.section`
  flex-grow: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatusImage = styled(Image)`
  @media screen and (max-width: 500px) {
    transition: 320ms;
    width: 400px;
    height: 400px;
  }
`;
