import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import ARROW_ICON from "../../assets/arrow.svg";
import styled from "styled-components";

const StyledExpandableMenu = styled.div`
  width: 11rem;
  margin-top: 1rem;
  padding-left: 1rem;

  p {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li ul {
    padding-left: 2rem;
    margin-top: 0.5rem;
  }

  .active {
    font-weight: 700;
  }

  .expanded {
    transform: rotate(180deg);
  }
`;

export function ExpandableMenu() {
  const activePath = "odziez";

  return (
    <StyledExpandableMenu>
      <p>Kobieta</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {category.categoryName}{" "}
                <img
                  src={ARROW_ICON}
                  alt="arrow icon"
                  className={activePath === category.path ? "expanded" : ""}
                />
              </NavLink>
              {activePath === category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink to={subcategory.path}>
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </StyledExpandableMenu>
  );
}
