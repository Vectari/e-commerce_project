import styled from "styled-components";
import HEART_FULL from "../../assets/heart-full.svg";
import HEART from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import { Theme } from "../../styles/Theme";

const StyledProduct = styled(Link)`
  position: relative;

  img {
    width: 250px;
    height: 280px;
  }

  h3 {
    font-weight: 700;
    margin: 0.5rem 0;
  }

  p {
    color: ${Theme.color.price};
    margin-bottom: 1rem;
  }
`;

const StyledHeart = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${HEART});
  background-repeat: none;

  &:hover {
    background-image: url(${HEART_FULL});
  }
`;

export function Product({ product }) {
  return (
    <StyledProduct>
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN} zł</p>
      <StyledHeart />
    </StyledProduct>
  );
}
