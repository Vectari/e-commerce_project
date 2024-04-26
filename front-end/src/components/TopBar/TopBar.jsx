import styled from "styled-components";

const StyledTopBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  align-items: center;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export function TopBar({ children }) {
  return <StyledTopBar>{children}</StyledTopBar>;
}
