import styled from "styled-components";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import { Theme } from "../../styles/Theme";

const StyledIconMenu = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const StyledLi = styled.li`
  position: relative;
`;

const StyledNumberOfProducts = styled.div`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;

  background-color: ${Theme.color.yellow};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  /* font-size: 0.5rem; */
  font-weight: 700;

  display: flex;
  justify-content: center;
  text-align: center;
`;

export function IconMenu() {
  const cartItems = 2;

  return (
    <StyledIconMenu>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON} alt="heart icon" />
        </Link>
      </li>
      <StyledLi>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="bag icon" />
          <StyledNumberOfProducts>{cartItems}</StyledNumberOfProducts>
        </Link>
      </StyledLi>
    </StyledIconMenu>
  );
}
