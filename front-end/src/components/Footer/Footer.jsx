import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  width: 100%;
  height: 200px;

  background-color: var(--color-text-default);
  color: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Footer() {
  return (
    <StyledFooterWrapper>
      <p>Copyright 2024</p>
    </StyledFooterWrapper>
  );
}
