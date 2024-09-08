import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import styled from "styled-components";
import { CATEGORIES, GENDERS } from "../../constants/categories";

const StyledBreadcrumbs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li a {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  li a.active {
    font-weight: 700;
  }

  img {
    transform: rotate(-90deg);
    margin-left: 0.5rem;
  }

  li:last-of-type img {
    display: none;
  }
`;

export function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();
  console.log(gender, category, subcategory);

  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  const breadcrumbs = [
    {
      categoryName: foundGender.categoryName,
      path: `/${foundGender.path}`,
    },
    {
      categoryName: foundCategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}`,
    },
  ];

  if (subcategory) {
    const foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === subcategory
    );

    breadcrumbs.push({
      categoryName: foundSubcategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
    });
  }

  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink end to={breadcrumb.path} />
            {breadcrumb.categoryName}
            <img src={ARROW_ICON} alt="arrow icon" />
          </li>
        );
      })}
    </StyledBreadcrumbs>
  );
}
