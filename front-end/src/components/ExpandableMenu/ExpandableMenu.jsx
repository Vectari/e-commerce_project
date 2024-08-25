import { NavLink, useParams } from "react-router-dom";
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

const PATH_TO_GENDER_NAME = {
  kobieta: "Kobieta",
  mezczyzna: "Mężczyzna",
  dziecko: "Dziecko",
};

export function ExpandableMenu() {
  const params = useParams();
  const activePath = params.category;

  return (
    <StyledExpandableMenu>
      <p>{PATH_TO_GENDER_NAME[params.gender]}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.gender}/${category.path}`}>
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
                        <NavLink
                          to={`/${params.gender}/${params.category}/${subcategory.path}`}
                        >
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

// 
// 
// 
// 
