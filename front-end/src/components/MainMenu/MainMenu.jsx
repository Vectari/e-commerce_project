import styled from "styled-components";
import { GENDERS } from "../../constants/categories";
import { Theme } from "../../styles/Theme";
import { NavLink } from "react-router-dom";

const StyledMainMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
`;

const StyledCategory = styled(NavLink)`
  text-transform: uppercase;
  color: ${Theme.color["text-grey"]};
  padding: 1rem 0;
  display: block;
  font-weight: 700;

  &.active {
    color: ${Theme.color["text-default"]};
    border-bottom: 3px solid ${Theme.color["text-default"]};
  }
`;

export function MainMenu() {
  return (
    <StyledMainMenu>
      {GENDERS.map((category) => {
        return (
          <li key={category.path}>
            <StyledCategory to={category.path}>
              {category.categoryName}
            </StyledCategory>
          </li>
        );
      })}
    </StyledMainMenu>
  );
}
