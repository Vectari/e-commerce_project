import styled from "styled-components";

const StyledFlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
`;

export function FlexContainer({ children }) {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
}
