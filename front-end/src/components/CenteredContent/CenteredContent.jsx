import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export function CenteredContent({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
