import styled from "styled-components";

const StyledMainContent = styled.div`
  width: 100%;
  flex: 1;
`;

export function MainContent({ children }) {
  return <StyledMainContent>{children}</StyledMainContent>;
}
