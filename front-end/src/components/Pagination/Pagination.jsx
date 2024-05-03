import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  li {
    cursor: pointer;
  }
`;

export function Pagination({ numberOfPages }) {
  const pages = Array(numberOfPages).fill(null);

  return (
    <StyledPagination>
      {pages.map((page, index) => {
        return (
          <li key={index}>
            <NavLink>{index + 1}</NavLink>
          </li>
        );
      })}
    </StyledPagination>
  );
}
