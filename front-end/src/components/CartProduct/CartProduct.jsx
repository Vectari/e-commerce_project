import styled from "styled-components";
import REMOVE_ICON from "../../assets/remove.svg";
import { Theme } from "../../styles/Theme";

const StyledCartProduct = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 3rem;
  border-top: 1px solid ${Theme.color["text-grey"]};
  margin: 0.5rem 0;

  img {
    width: 100px;
    height: 120px;
  }
`;

const StyledCartProductInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StyledPriceRow = styled.p`
  font-weight: 700;

  span {
    color: ${Theme.color["text-grey"]};
    font-weight: normal;
  }
`;

const StyledButtonRow = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;
  align-items: flex-end;

  button {
    border: none;
    background: none;
  }
  img {
    margin-right: 0%.5rem;
    width: 1rem;
    height: 1rem;
  }
`;

export function CartProduct({ product }) {
  return (
    <StyledCartProduct>
      <img src={product.photos[0]} alt="product image" />
      <StyledCartProductInfo>
        <StyledTopRow>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{product.pricePLN} zł</p>
        </StyledTopRow>
        <StyledPriceRow>
          <span>Cena: </span>
          {product.pricePLN} zł
        </StyledPriceRow>
        <StyledButtonRow>
          <button>
            <img src={REMOVE_ICON} alt="remove button icon" />
            {""} Usuń
          </button>
        </StyledButtonRow>
      </StyledCartProductInfo>
    </StyledCartProduct>
  );
}
