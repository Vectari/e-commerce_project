import styled from "styled-components";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
import { Theme } from "../../styles/Theme";

const StyledCategoryMenu = styled.div`
  background-color: ${Theme.color["theme-main"]};
  width: 100%;
`;

const StyledCategory = styled.ul`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: ${Theme.color.white};
  &.active {
    text-decoration: underline;
  }
`;

export function CategoryMenu() {
  const params = useParams();

  return (
    <StyledCategoryMenu>
      <StyledCategory>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <StyledNavLink to={`${params.gender}/${category.path}`}>
                {category.categoryName}
              </StyledNavLink>
            </li>
          );
        })}
      </StyledCategory>
    </StyledCategoryMenu>
  );
}
