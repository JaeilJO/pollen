import styled from "styled-components";

export const LocationSectionContainer = styled.section`
  flex-grow: 3;
  display: flex;
`;

export const LocationBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
`;

export const LocationTextBox = styled.div`
  flex-grow: 1;
  font-size: 4rem;
  font-family: Roboto;
  color: ${(props) => props.theme.PrimaryColor};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const LocationButtonBox = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.SecondaryColor};
  align-items: flex-start;
  font-size: 1rem;
  cursor: pointer;
  transition: 320ms;

  svg path {
    stroke: ${(props) => props.theme.SecondaryColor};
  }
  &:hover {
    color: ${(props) => props.theme.PrimaryColor};
    & svg path {
      stroke: ${(props) => props.theme.PrimaryColor};
    }
  }
`;
