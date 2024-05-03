import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const StyledButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  padding: 1rem 0;
  color: ${Theme.color.white};
  text-transform: uppercase;
  /* background-color: ${Theme.color["theme-main"]}; */
  background-color: ${(props) =>
    props.isBlack ? Theme.color["text-default"] : Theme.color["theme-main"]};
  font-weight: 700;
`;

export function FullWidthButton({ children, onClick, isBlack }) {
  return (
    <StyledButton onClick={onClick} isBlack={isBlack}>
      {children}
    </StyledButton>
  );
}
