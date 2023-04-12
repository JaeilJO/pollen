import styled from "styled-components";

export const StatusSectionContainer = styled.section`
  flex-grow: 3;

  display: flex;
`;

export const StatusBox = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatusTextBox = styled.div`
  flex-grow: 1;
  font-size: 4rem;
  font-weight: 800;
  font-family: Roboto;
  color: ${(props) => props.theme.PrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatusButtonBox = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
