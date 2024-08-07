import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import styled from "styled-components";

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
  const breadcrumbs = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Odzież",
      path: "odziez",
    },
    {
      categoryName: "Swetry",
      path: "swetry",
    },
  ];

  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path} />
            {breadcrumb.categoryName}
            <img src={ARROW_ICON} alt="arrow icon" />
          </li>
        );
      })}
    </StyledBreadcrumbs>
  );
}
