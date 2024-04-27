import styled from "styled-components";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

const StyledHero = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
`;

const StyledContentWrapper = styled.div`
  margin-top: 5rem;
  padding: 3rem 5rem;
  display: inline-block;
  background: rgba(255, 255, 255, 0.5);

  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export function Hero({ heroImage }) {
  return (
    <StyledHero style={{ backgroundImage: `url(${heroImage})` }}>
      <CenteredContent>
        <StyledContentWrapper>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton>Sprawdź produkty</FullWidthButton>
        </StyledContentWrapper>
      </CenteredContent>
    </StyledHero>
  );
}
